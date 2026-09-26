import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Editor from "@monaco-editor/react";

function Question() {
  const { topic, id } = useParams();
  const topicConfig = {
    arrays: {
      label: "ARRAY",
      name: "Arrays",
    },
    strings: {
      label: "STRING",
      name: "Strings",
    },
    "linked-list": {
      label: "LINKED LIST",
      name: "Linked List",
    },
    stack: {
      label: "STACK",
      name: "Stack",
    },
    queue: {
      label: "QUEUE",
      name: "Queue",
    },
    "binary-tree": {
      label: "BINARY TREE",
      name: "Binary Tree",
    },
    graph: {
      label: "GRAPH",
      name: "Graph",
    },
    "dynamic-programming": {
      label: "DYNAMIC PROGRAMMING",
      name: "Dynamic Programming",
    },
  };

  const currentTopic = topicConfig[topic] || {
    label: topic?.toUpperCase() || "DSA",
    name: topic || "DSA",
  };
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        setError("");
        setResult("");

        const token = localStorage.getItem("placementproToken");

        if (!token) {
          setError("Please login to view this question.");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/questions/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.data.success) {
          const questionData = response.data.question;

          setQuestion(questionData);

          setCode(questionData.starterCode || "");
        }
      } catch (error) {
        console.error("Failed to load question:", error);

        if (error.response?.status === 401) {
          setError(
            "Your login session is invalid or expired. Please login again.",
          );
        } else if (error.response?.status === 404) {
          setError("Question not found.");
        } else {
          setError(
            "Unable to load question. Make sure the backend server is running.",
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleRunCode = async (mode = "run") => {
    setResult(
      mode === "submit" ? "Submitting solution..." : "Running test cases...",
    );
    try {
      const token = localStorage.getItem("placementproToken");

      if (!token) {
        setResult("Please login before running code.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/run",
        {
          code,
          language: "java",
          questionId: id,
          mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = response.data;

      console.log("Backend response:", data);

      if (data.success) {
        setResult(data);
      } else {
        setResult(data.output || "Code execution failed.");
      }
    } catch (error) {
      console.error("Frontend error:", error);

      if (error.response?.status === 401) {
        setResult(
          "Your login session is invalid or expired. Please login again.",
        );
        return;
      }

      if (error.response?.data?.output) {
        setResult(error.response.data.output);
        return;
      }

      if (error.response?.data?.message) {
        setResult(error.response.data.message);
        return;
      }

      setResult(
        "Unable to connect to backend. Make sure the backend server is running.",
      );
    }
  };

  if (loading) {
    return (
      <div className="question-page">
        <div className="problem-section">
          <h1>Loading Question...</h1>
        </div>
      </div>
    );
  }

  if (error || !question) {
    return (
      <div className="question-page">
        <div className="problem-section">
          <h1>Question Not Found</h1>

          <p>{error || "The question you are looking for does not exist."}</p>

          <Link to={`/practice/dsa/${topic}`} className="back-link">
            ← Back to {currentTopic.name}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="question-page">
      <div className="question-top">
        <Link to={`/practice/dsa/${topic}`} className="back-link">
          ← Back to {currentTopic.name}
        </Link>

        <span className="question-id">Question #{question.questionId}</span>
      </div>

      <div className="problem-section">
        <div className="problem-header">
          <div>
            <p className="section-label">{currentTopic.label} PROBLEM</p>

            <h1>{question.title}</h1>
          </div>

          <span className="problem-difficulty">{question.difficulty}</span>
        </div>

        <div className="problem-content">
          <h2>Problem</h2>

          <p>{question.description}</p>

          <h2>Example</h2>

          <div className="example-box">
            <p>
              <strong>Input:</strong> {question.input}
            </p>

            <p>
              <strong>Output:</strong> {question.output}
            </p>

            <p>
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>

          <h2>Constraints</h2>

          <ul>
            {question.constraints?.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="editor-section">
        <div className="editor-header">
          <span>Java</span>

          <div className="editor-actions">
            <button
              className="btn run-btn"
              onClick={() => handleRunCode("run")}
            >
              ▶ Run Code
            </button>

            <button
              className="btn primary-btn submit-btn"
              onClick={() => handleRunCode("submit")}
            >
              ✓ Submit
            </button>
          </div>
        </div>

        <div className="monaco-editor-container">
          <Editor
            height="450px"
            language="java"
            theme="vs-dark"
            value={code}
            onChange={(value) => {
              setCode(value || "");
            }}
            options={{
              fontSize: 15,
              lineNumbers: "on",

              minimap: {
                enabled: false,
              },

              automaticLayout: true,
              tabSize: 4,
              insertSpaces: true,
              autoIndent: "full",
              formatOnType: true,
              formatOnPaste: true,

              bracketPairColorization: {
                enabled: true,
              },

              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </div>

      <div className="result-section">
        <h2>Test Result</h2>

        <div className="result-box">
          {!result && (
            <p className="empty-result">
              Write your solution and click "Run Code".
            </p>
          )}

          {typeof result === "string" && (
            <p className="success-result">{result}</p>
          )}

          {typeof result === "object" && result.results && (
            <div className="test-results">
              {result.results.map((test) => (
                <div className="test-case-result" key={test.testCase}>
                  <div className="test-case-header">
                    <strong>
                      {test.hidden
                        ? `Hidden Test ${test.testCase}`
                        : `Test Case ${test.testCase}`}
                    </strong>

                    <span
                      className={test.passed ? "test-passed" : "test-failed"}
                    >
                      {test.passed ? "✓ Passed" : "✗ Failed"}
                    </span>
                  </div>

                  {!test.hidden && (
                    <>
                      <p>
                        <strong>Input:</strong>{" "}
                        {Array.isArray(test.input)
                          ? JSON.stringify(test.input)
                          : String(test.input)}
                      </p>

                      <p>
                        <strong>Expected:</strong> {test.expected}
                      </p>

                      <p>
                        <strong>Your Output:</strong> {test.output}
                      </p>
                    </>
                  )}

                  {test.hidden && (
                    <p className="hidden-test-message">
                      Hidden test case details are not shown.
                    </p>
                  )}
                </div>
              ))}

              <div
                className={
                  result.allPassed ? "overall-passed" : "overall-failed"
                }
              >
                {result.mode === "submit"
                  ? result.allPassed
                    ? "✓ Solution Accepted"
                    : "✗ Solution Rejected"
                  : result.allPassed
                    ? "✓ All Sample Test Cases Passed"
                    : "✗ Some Sample Test Cases Failed"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
