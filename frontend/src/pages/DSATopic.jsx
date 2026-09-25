import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function DSATopic() {
  const { topic } = useParams();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [solvedQuestions, setSolvedQuestions] = useState([]);

  const topicConfig = {
    arrays: {
      apiTopic: "array",
      label: "ARRAYS",
      title: "Array Problems 📊",
      description:
        "Practice important array problems commonly asked in coding interviews.",
    },

    strings: {
      apiTopic: "string",
      label: "STRINGS",
      title: "String Problems 🔤",
      description:
        "Practice important string problems commonly asked in coding interviews.",
    },
    "linked-list": {
      apiTopic: "linked-list",
      label: "LINKED LIST",
      title: "Linked List Problems 🔗",
      description:
        "Practice important linked list problems commonly asked in coding interviews.",
    },
  };

  const currentTopic = topicConfig[topic];

  useEffect(() => {
    const fetchData = async () => {
      if (!currentTopic) {
        setError("DSA topic not found.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("placementproToken");

        if (!token) {
          setError("Please login to view questions.");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [questionsResponse, progressResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/questions", {
            headers,
            params: {
              topic: currentTopic.apiTopic,
            },
          }),

          axios.get("http://localhost:5000/api/progress", {
            headers,
          }),
        ]);

        if (questionsResponse.data.success) {
          setQuestions(questionsResponse.data.questions);
        }

        if (progressResponse.data.success) {
          setSolvedQuestions(progressResponse.data.solvedQuestionIds || []);
        }
      } catch (error) {
        console.error("Failed to load DSA topic:", error);

        if (error.response?.status === 401) {
          setError(
            "Your login session is invalid or expired. Please login again.",
          );
        } else {
          setError(
            "Unable to load questions. Make sure the backend server is running.",
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic]);

  if (!currentTopic && !loading) {
    return (
      <div className="arrays-page">
        <div className="arrays-header">
          <h1>Topic Not Found</h1>
          <p>The requested DSA topic does not exist.</p>
        </div>

        <div className="back-section">
          <Link to="/practice/dsa" className="back-link">
            ← Back to DSA
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="arrays-page">
      <div className="arrays-header">
        <p className="section-label">DSA / {currentTopic?.label}</p>

        <h1>{currentTopic?.title}</h1>

        <p>{currentTopic?.description}</p>

        <div className="progress-summary">
          <span>
            {
              questions.filter((question) =>
                solvedQuestions.includes(question.questionId),
              ).length
            }{" "}
            / {questions.length} Solved
          </span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  questions.length > 0
                    ? `${
                        (questions.filter((question) =>
                          solvedQuestions.includes(question.questionId),
                        ).length /
                          questions.length) *
                        100
                      }%`
                    : "0%",
              }}
            />
          </div>
        </div>
      </div>

      <div className="questions-container">
        {loading && <p>Loading questions...</p>}

        {!loading && error && <p>{error}</p>}

        {!loading && !error && questions.length === 0 && (
          <p>No questions found.</p>
        )}

        {!loading &&
          !error &&
          questions.map((question) => {
            const isSolved = solvedQuestions.includes(question.questionId);

            return (
              <div className="question-card" key={question.questionId}>
                <div className="question-info">
                  <span className="question-number">
                    #{question.questionId}
                  </span>

                  <h2>{question.title}</h2>
                </div>

                <div className="question-actions">
                  <span
                    className={`difficulty ${question.difficulty.toLowerCase()}`}
                  >
                    {question.difficulty}
                  </span>

                  <Link
                    to={`/practice/dsa/${topic}/${question.questionId}`}
                    className={isSolved ? "btn solved-btn" : "btn primary-btn"}
                  >
                    {isSolved ? "✓ Solved" : "Solve →"}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>

      <div className="back-section">
        <Link to="/practice/dsa" className="back-link">
          ← Back to DSA
        </Link>
      </div>
    </div>
  );
}

export default DSATopic;
