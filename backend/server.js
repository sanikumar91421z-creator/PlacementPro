require("dotenv").config();

const MockTest = require("./models/MockTest");
const MockTestAttempt = require("./models/MockTestAttempt");
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
app.get("/api/progress/aptitude", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const totalQuestions = await AptitudeQuestion.countDocuments();

    const attempts = await AptitudeAttempt.find({
      userId,
    }).sort({ createdAt: -1 });

    const attemptedQuestionIds = [
      ...new Set(attempts.map((attempt) => attempt.questionId)),
    ];

    const correctQuestionIds = [
      ...new Set(
        attempts
          .filter((attempt) => attempt.isCorrect)
          .map((attempt) => attempt.questionId),
      ),
    ];

    const totalAttempted = attemptedQuestionIds.length;
    const totalCorrect = correctQuestionIds.length;

    const progressPercentage =
      totalQuestions === 0
        ? 0
        : Math.round((totalCorrect / totalQuestions) * 100);

    const accuracy =
      totalAttempted === 0
        ? 0
        : Math.round((totalCorrect / totalAttempted) * 100);

    return res.status(200).json({
      success: true,

      totalQuestions,

      solvedCount: totalCorrect,

      attemptedCount: totalAttempted,

      progressPercentage,

      accuracy,

      solvedQuestionIds: correctQuestionIds,

      attemptedQuestionIds,
    });
  } catch (error) {
    console.error("Aptitude progress error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load aptitude progress.",
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

    // You currently use visible test cases only.
    const testCases = question.testCases;

    const results = [];

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];

      let finalCode;

      if (hasMainClass) {
        finalCode = code;
      } else {
        // Judge0 requires only Main to be public.
        const userCode = code.replace(
          /public\s+class\s+Solution/,
          "class Solution",
        );

        const argumentDeclarations = [];
        const argumentNames = [];

        // ==========================================
        // CREATE JAVA METHOD ARGUMENTS
        // ==========================================

        question.parameters.forEach((parameterType, index) => {
          const value = testCase.args[index];
          const variableName = `arg${index}`;

          argumentNames.push(variableName);

          // int[]
          if (parameterType === "int[]") {
            if (!Array.isArray(value)) {
              throw new Error("int[] test case value must be an array.");
            }

            argumentDeclarations.push(
              `int[] ${variableName} = {${value.join(",")}};`,
            );
          }

          // int
          else if (parameterType === "int") {
            argumentDeclarations.push(
              `int ${variableName} = ${Number(value)};`,
            );
          }

          // String
          else if (parameterType === "String") {
            const escapedValue = String(value)
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/\t/g, "\\t");

            argumentDeclarations.push(
              `String ${variableName} = "${escapedValue}";`,
            );
          }

          // String[]
          else if (parameterType === "String[]") {
            if (!Array.isArray(value)) {
              throw new Error("String[] test case value must be an array.");
            }

            const stringValues = value.map((item) => {
              const escapedItem = String(item)
                .replace(/\\/g, "\\\\")
                .replace(/"/g, '\\"')
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/\t/g, "\\t");

              return `"${escapedItem}"`;
            });

            argumentDeclarations.push(
              `String[] ${variableName} = {${stringValues.join(", ")}};`,
            );
          }

          // ListNode
          else if (parameterType === "ListNode") {
            if (!Array.isArray(value)) {
              throw new Error("ListNode test case value must be an array.");
            }

            argumentDeclarations.push(`
ListNode ${variableName} = null;
ListNode ${variableName}Tail = null;

int[] ${variableName}Values = {${value.join(",")}};

for (int nodeValue : ${variableName}Values) {
    ListNode newNode = new ListNode(nodeValue);

    if (${variableName} == null) {
        ${variableName} = newNode;
        ${variableName}Tail = newNode;
    } else {
        ${variableName}Tail.next = newNode;
        ${variableName}Tail = newNode;
    }
}
`);
          }

          // Unsupported parameter
          else {
            throw new Error(`Unsupported parameter type: ${parameterType}`);
          }
        });

        // ==========================================
        // CREATE JAVA RESULT CODE
        // ==========================================

        let resultCode = "";

        // int
        if (question.returnType === "int") {
          resultCode = `
int result = solution.${question.methodName}(
    ${argumentNames.join(", ")}
);

System.out.println(result);
`;
        }

        // int[]
        else if (question.returnType === "int[]") {
          resultCode = `
int[] result = solution.${question.methodName}(
    ${argumentNames.join(", ")}
);

System.out.println(
    java.util.Arrays.toString(result)
);
`;
        }

        // String
        else if (question.returnType === "String") {
          resultCode = `
String result = solution.${question.methodName}(
    ${argumentNames.join(", ")}
);

System.out.println(result);
`;
        }

        // boolean
        else if (question.returnType === "boolean") {
          resultCode = `
boolean result = solution.${question.methodName}(
    ${argumentNames.join(", ")}
);

System.out.println(result);
`;
        }

        // ListNode
        else if (question.returnType === "ListNode") {
          resultCode = `
ListNode result = solution.${question.methodName}(
    ${argumentNames.join(", ")}
);

java.util.ArrayList<Integer> output =
    new java.util.ArrayList<>();

ListNode current = result;

while (current != null) {
    output.add(current.val);
    current = current.next;
}

System.out.println(output);
`;
        }

        // Unsupported return type
        else {
          throw new Error(`Unsupported return type: ${question.returnType}`);
        }

        // ==========================================
        // ADD ListNode CLASS ONLY WHEN REQUIRED
        // ==========================================

        const needsListNode =
          question.parameters.includes("ListNode") ||
          question.returnType === "ListNode";

        const listNodeClass = needsListNode
          ? `
class ListNode {

    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}
`
          : "";

        // ==========================================
        // CREATE MAIN CLASS
        // ==========================================

        const testCode = `

${listNodeClass}

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

      // ==========================================
      // SEND CODE TO JUDGE0
      // ==========================================

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

      // ==========================================
      // CREATE EXPECTED OUTPUT
      // ==========================================

      let expectedOutput;

      if (Array.isArray(testCase.expected)) {
        expectedOutput = `[${testCase.expected.join(", ")}]`;
      } else {
        expectedOutput = String(testCase.expected);
      }

      const passed = output === expectedOutput;

      const displayInput =
        testCase.args.length === 1 ? testCase.args[0] : testCase.args;

      results.push({
        testCase: i + 1,
        hidden: false,
        input: displayInput,
        expected: expectedOutput,
        output,
        passed,
      });
    }

    // ==========================================
    // CHECK FINAL RESULT
    // ==========================================

    const allPassed = results.every((test) => test.passed);

    // ==========================================
    // SAVE SUBMISSION
    // ==========================================

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

    // ==========================================
    // SEND RESULT TO FRONTEND
    // ==========================================

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
app.get("/api/mock-tests", authMiddleware, async (req, res) => {
  try {
    const tests = await MockTest.find({
      isActive: true,
    }).sort({ testId: 1 });

    const mockTests = tests.map((test) => ({
      testId: test.testId,
      title: test.title,
      type: test.type,
      description: test.description,
      duration: test.duration,
      totalMarks: test.totalMarks,
      questionCount: test.questionIds.length,
    }));

    return res.status(200).json({
      success: true,
      count: mockTests.length,
      mockTests,
    });
  } catch (error) {
    console.error("Get mock tests error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load mock tests.",
    });
  }
});
app.get("/api/mock-tests/:testId", authMiddleware, async (req, res) => {
  try {
    const testId = Number(req.params.testId);

    if (!Number.isInteger(testId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid mock test ID.",
      });
    }

    const mockTest = await MockTest.findOne({
      testId,
      isActive: true,
    });

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock test not found.",
      });
    }

    const questions = await AptitudeQuestion.find({
      questionId: { $in: mockTest.questionIds },
    }).select("questionId category topic question options difficulty");

    const questionMap = new Map(
      questions.map((question) => [question.questionId, question]),
    );

    const orderedQuestions = mockTest.questionIds
      .map((id) => questionMap.get(id))
      .filter(Boolean);

    return res.status(200).json({
      success: true,

      test: {
        testId: mockTest.testId,
        title: mockTest.title,
        description: mockTest.description,
        duration: mockTest.duration,
        totalMarks: mockTest.totalMarks,
        totalQuestions: orderedQuestions.length,
        questions: orderedQuestions,
      },
    });
  } catch (error) {
    console.error("Get mock test error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load mock test.",
    });
  }
});
app.post("/api/mock-tests/:testId/submit", authMiddleware, async (req, res) => {
  try {
    const testId = Number(req.params.testId);
    const { answers = {}, timeTaken = 0 } = req.body;

    if (!Number.isInteger(testId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid mock test ID.",
      });
    }

    const mockTest = await MockTest.findOne({
      testId,
      isActive: true,
    });

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock test not found.",
      });
    }

    const questions = await AptitudeQuestion.find({
      questionId: { $in: mockTest.questionIds },
    });

    const questionMap = new Map(
      questions.map((question) => [question.questionId, question]),
    );

    let correctAnswers = 0;
    let wrongAnswers = 0;
    let unanswered = 0;

    const evaluatedAnswers = mockTest.questionIds
      .map((questionId) => {
        const question = questionMap.get(questionId);

        if (!question) {
          return null;
        }

        const selectedAnswer = answers[questionId];

        if (selectedAnswer === undefined || selectedAnswer === null) {
          unanswered++;

          return {
            questionId,
            selectedAnswer: null,
            isCorrect: false,
          };
        }

        const numericAnswer = Number(selectedAnswer);

        const isCorrect = numericAnswer === question.correctAnswer;

        if (isCorrect) {
          correctAnswers++;
        } else {
          wrongAnswers++;
        }

        return {
          questionId,
          selectedAnswer: numericAnswer,
          isCorrect,
        };
      })
      .filter(Boolean);

    const totalQuestions = evaluatedAnswers.length;

    const marksPerQuestion =
      totalQuestions > 0 ? mockTest.totalMarks / totalQuestions : 0;

    const score = Number((correctAnswers * marksPerQuestion).toFixed(2));

    const percentage =
      mockTest.totalMarks > 0
        ? Number(((score / mockTest.totalMarks) * 100).toFixed(2))
        : 0;

    const attempt = await MockTestAttempt.create({
      userId: req.user.userId,
      testId,
      answers: evaluatedAnswers,
      correctAnswers,
      wrongAnswers,
      unanswered,
      score,
      totalMarks: mockTest.totalMarks,
      percentage,
      timeTaken: Number(timeTaken) || 0,
    });

    return res.status(200).json({
      success: true,
      message: "Mock test submitted successfully.",

      result: {
        attemptId: attempt._id,
        testId,
        title: mockTest.title,
        totalQuestions,
        correctAnswers,
        wrongAnswers,
        unanswered,
        score,
        totalMarks: mockTest.totalMarks,
        percentage,
        timeTaken: attempt.timeTaken,
      },
    });
  } catch (error) {
    console.error("Submit mock test error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit mock test.",
    });
  }
});
app.get("/api/progress/mock-tests", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const totalMockTests = await MockTest.countDocuments({
      isActive: true,
    });

    const attempts = await MockTestAttempt.find({
      userId,
    }).sort({ createdAt: -1 });

    const attemptedTestIds = [
      ...new Set(attempts.map((attempt) => attempt.testId)),
    ];

    const testsAttempted = attemptedTestIds.length;

    let bestPercentage = 0;
    let averagePercentage = 0;

    if (attempts.length > 0) {
      bestPercentage = Math.max(
        ...attempts.map((attempt) => attempt.percentage),
      );

      const totalPercentage = attempts.reduce(
        (sum, attempt) => sum + attempt.percentage,
        0,
      );

      averagePercentage = Number(
        (totalPercentage / attempts.length).toFixed(2),
      );
    }

    const progressPercentage =
      totalMockTests === 0
        ? 0
        : Math.round((testsAttempted / totalMockTests) * 100);

    const recentAttempts = attempts.slice(0, 5).map((attempt) => ({
      attemptId: attempt._id,
      testId: attempt.testId,
      score: attempt.score,
      totalMarks: attempt.totalMarks,
      percentage: attempt.percentage,
      correctAnswers: attempt.correctAnswers,
      wrongAnswers: attempt.wrongAnswers,
      unanswered: attempt.unanswered,
      timeTaken: attempt.timeTaken,
      attemptedAt: attempt.createdAt,
    }));

    return res.status(200).json({
      success: true,

      totalMockTests,
      testsAttempted,
      totalAttempts: attempts.length,

      progressPercentage,
      bestPercentage,
      averagePercentage,

      attemptedTestIds,

      recentAttempts,
    });
  } catch (error) {
    console.error("Mock test progress error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load mock test progress.",
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
