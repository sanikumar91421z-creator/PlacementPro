require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Question = require("./models/Question");
const authMiddleware = require("./middleware/authMiddleware");
const Submission = require("./models/Submission");
const app = express();
const AptitudeQuestion = require("./models/AptitudeQuestion");
const AptitudeAttempt = require("./models/AptitudeAttempt");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ==========================================
// MONGODB CONNECTION
// ==========================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// ==========================================
// HOME ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "PlacementPro Backend is running 🚀",
  });
});

// ==========================================
// SIGNUP API
// ==========================================

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("New user created:", newUser.email);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Signup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to create account",
    });
  }
});

// ==========================================
// LOGIN API
// ==========================================

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing from .env");

      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// ==========================================
// PROFILE API - PROTECTED
// ==========================================

app.get("/api/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Profile error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
app.get("/api/questions", authMiddleware, async (req, res) => {
  try {
    const { topic } = req.query;

    const filter = {};

    if (topic) {
      filter.topic = topic.toLowerCase();
    }

    const questions = await Question.find(filter)
      .select("-testCases -methodName -returnType -parameters")
      .sort({
        questionId: 1,
      });

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Get questions error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load questions.",
    });
  }
});
app.get("/api/aptitude/questions", authMiddleware, async (req, res) => {
  try {
    const { category, topic } = req.query;

    const filter = {};

    if (category) {
      filter.category = category.toLowerCase();
    }

    if (topic) {
      filter.topic = topic.toLowerCase();
    }

    const questions = await AptitudeQuestion.find(filter)
      .select("-correctAnswer")
      .sort({ questionId: 1 });

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Get aptitude questions error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load aptitude questions.",
    });
  }
});
app.post("/api/aptitude/check", authMiddleware, async (req, res) => {
  try {
    const { questionId, selectedAnswer } = req.body;

    const numericQuestionId = Number(questionId);
    const numericSelectedAnswer = Number(selectedAnswer);

    if (!Number.isInteger(numericQuestionId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid question ID.",
      });
    }

    if (
      !Number.isInteger(numericSelectedAnswer) ||
      numericSelectedAnswer < 0 ||
      numericSelectedAnswer > 3
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid selected answer.",
      });
    }

    const question = await AptitudeQuestion.findOne({
      questionId: numericQuestionId,
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Aptitude question not found.",
      });
    }

    const isCorrect = numericSelectedAnswer === question.correctAnswer;

    await AptitudeAttempt.create({
      userId: req.user.userId,
      questionId: question.questionId,
      selectedAnswer: numericSelectedAnswer,
      isCorrect,
    });

    return res.status(200).json({
      success: true,
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
    });
  } catch (error) {
    console.error("Check aptitude answer error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to check answer.",
    });
  }
});
app.get("/api/questions/:id", authMiddleware, async (req, res) => {
  try {
    const questionId = Number(req.params.id);

    if (!Number.isInteger(questionId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid question ID.",
      });
    }

    const question = await Question.findOne({
      questionId,
    }).select("-testCases -methodName -returnType -parameters");

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found.",
      });
    }

    return res.status(200).json({
      success: true,
      question,
    });
  } catch (error) {
    console.error("Get question error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load question.",
    });
  }
});
app.get("/api/progress", authMiddleware, async (req, res) => {
  try {
    const acceptedSubmissions = await Submission.find({
      userId: req.user.userId,
      status: "Accepted",
    }).select("questionId");

    const solvedQuestionIds = [
      ...new Set(
        acceptedSubmissions.map((submission) => submission.questionId),
      ),
    ];

    return res.status(200).json({
      success: true,
      solvedCount: solvedQuestionIds.length,
      solvedQuestionIds,
    });
  } catch (error) {
    console.error("Progress error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load user progress.",
    });
  }
});
app.get("/api/progress/dsa", authMiddleware, async (req, res) => {
  try {
    const totalQuestions = await Question.countDocuments();

    const submissions = await Submission.find({
      userId: req.user.userId,
    }).sort({ createdAt: -1 });

    const acceptedSubmissions = submissions.filter(
      (submission) => submission.status === "Accepted",
    );

    const solvedQuestionIds = [
      ...new Set(
        acceptedSubmissions.map((submission) => submission.questionId),
      ),
    ];

    const solvedQuestions = solvedQuestionIds.length;

    const totalSubmissions = submissions.length;

    const acceptedCount = acceptedSubmissions.length;

    const rejectedCount = submissions.filter(
      (submission) => submission.status === "Rejected",
    ).length;

    const progressPercentage =
      totalQuestions > 0
        ? Math.round((solvedQuestions / totalQuestions) * 100)
        : 0;

    return res.status(200).json({
      success: true,

      progress: {
        totalQuestions,
        solvedQuestions,
        progressPercentage,
        totalSubmissions,
        acceptedCount,
        rejectedCount,
      },

      solvedQuestionIds,

      recentSubmissions: submissions.slice(0, 5),
    });
  } catch (error) {
    console.error("Progress details error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load progress details.",
    });
  }
});

// ==========================================
// CODE RUNNER API - PROTECTED
// ==========================================
app.post("/api/run", authMiddleware, async (req, res) => {
  try {
    const { code, language, questionId, mode = "run" } = req.body;

    if (!code || typeof code !== "string") {
      return res.status(400).json({
        success: false,
        output: "Code is required.",
      });
    }

    if (!questionId) {
      return res.status(400).json({
        success: false,
        output: "Question ID is required.",
      });
    }

    const numericQuestionId = Number(questionId);

    if (!Number.isInteger(numericQuestionId)) {
      return res.status(400).json({
        success: false,
        output: "Invalid question ID.",
      });
    }

    const question = await Question.findOne({
      questionId: numericQuestionId,
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        output: "Question not found.",
      });
    }

    console.log("=================================");
    console.log("CODE EXECUTION REQUEST");
    console.log("User:", req.user.userId);
    console.log("Question ID:", questionId);
    console.log("Question:", question.title);
    console.log("Language:", language);
    console.log("=================================");

    const hasMainClass = /public\s+class\s+Main|class\s+Main/.test(code);

    const testCases =
      mode === "submit"
        ? question.testCases
        : question.testCases.filter((testCase) => !testCase.hidden);

    const results = [];

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      let finalCode;

      if (hasMainClass) {
        finalCode = code;
      } else {
        const userCode = code.replace(
          /public\s+class\s+Solution/,
          "class Solution",
        );

        const argumentDeclarations = [];
        const argumentNames = [];

        question.parameters.forEach((parameterType, index) => {
          const value = testCase.args[index];
          const variableName = `arg${index}`;

          argumentNames.push(variableName);

          if (parameterType === "int[]") {
            argumentDeclarations.push(
              `int[] ${variableName} = {${value.join(",")}};`,
            );
          } else if (parameterType === "int") {
            argumentDeclarations.push(`int ${variableName} = ${value};`);
          } else if (parameterType === "String") {
            const escapedValue = String(value)
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"');

            argumentDeclarations.push(
              `String ${variableName} = "${escapedValue}";`,
            );
          } else {
            throw new Error(`Unsupported parameter type: ${parameterType}`);
          }
        });

        let resultCode = "";

        if (question.returnType === "int") {
          resultCode = `
        int result = solution.${question.methodName}(
            ${argumentNames.join(", ")}
        );

        System.out.println(result);
`;
        } else if (question.returnType === "int[]") {
          resultCode = `
        int[] result = solution.${question.methodName}(
            ${argumentNames.join(", ")}
        );

        System.out.println(
            java.util.Arrays.toString(result)
        );
`;
        } else if (question.returnType === "String") {
          resultCode = `
        String result = solution.${question.methodName}(
            ${argumentNames.join(", ")}
        );

        System.out.println(result);
`;
        } else if (question.returnType === "boolean") {
          resultCode = `
        boolean result = solution.${question.methodName}(
            ${argumentNames.join(", ")}
        );

        System.out.println(result);
`;
        } else {
          throw new Error(`Unsupported return type: ${question.returnType}`);
        }

        const testCode = `

public class Main {

    public static void main(String[] args) {

        ${argumentDeclarations.join("\n        ")}

        Solution solution = new Solution();

        ${resultCode}
    }
}
`;

        finalCode = userCode + "\n" + testCode;
      }

      console.log(`Running Test Case ${i + 1}`);

      const response = await axios.post(
        "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
        {
          source_code: finalCode,
          language_id: 62,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 20000,
        },
      );

      const judgeResult = response.data;

      const output = (
        judgeResult.stdout ||
        judgeResult.stderr ||
        judgeResult.compile_output ||
        judgeResult.message ||
        ""
      ).trim();

      let expectedOutput;

      if (Array.isArray(testCase.expected)) {
        expectedOutput = `[${testCase.expected.join(", ")}]`;
      } else {
        expectedOutput = String(testCase.expected);
      }

      const passed = output === expectedOutput;

      const displayInput =
        testCase.args.length === 1 ? testCase.args[0] : testCase.args;

      if (mode === "submit" && testCase.hidden) {
        results.push({
          testCase: i + 1,
          hidden: true,
          passed,
        });
      } else {
        results.push({
          testCase: i + 1,
          hidden: false,
          input: displayInput,
          expected: expectedOutput,
          output,
          passed,
        });
      }
    }

    const allPassed = results.every((test) => test.passed);
    if (mode === "submit") {
      const passedTests = results.filter((test) => test.passed).length;

      await Submission.create({
        userId: req.user.userId,
        questionId: question.questionId,
        language: language || "java",
        code,
        status: allPassed ? "Accepted" : "Rejected",
        passedTests,
        totalTests: results.length,
      });

      console.log(
        `Submission saved: User ${req.user.userId}, Question ${question.questionId}`,
      );
    }
    return res.status(200).json({
      success: true,
      questionId: question.questionId,
      questionTitle: question.title,
      mode,
      allPassed,
      results,
    });
  } catch (error) {
    console.error("=================================");
    console.error("EXECUTION ERROR:", error.message);

    if (error.response) {
      console.error(error.response.data);

      return res.status(500).json({
        success: false,
        output:
          error.response.data?.error ||
          error.response.data?.message ||
          "Code execution failed.",
      });
    }

    return res.status(500).json({
      success: false,
      output:
        error.code === "ECONNABORTED"
          ? "Code execution server timed out."
          : error.message || "Unable to connect to code execution server.",
    });
  }
});

// ==========================================
// 404 API ROUTE
// ==========================================

app.use("/api", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
