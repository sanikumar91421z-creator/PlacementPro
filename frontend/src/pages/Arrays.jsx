import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Arrays() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("placementproToken");

        if (!token) {
          setError("Please login to view questions.");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [questionsResponse, progressResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/questions?topic=array", {
            headers,
          }),

          axios.get("http://localhost:5000/api/progress", { headers }),
        ]);

        if (questionsResponse.data.success) {
          setQuestions(questionsResponse.data.questions);
        }

        if (progressResponse.data.success) {
          setSolvedQuestions(progressResponse.data.solvedQuestionIds);
        }
      } catch (error) {
        console.error("Failed to load array page:", error);

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
  }, []);

  return (
    <div className="arrays-page">
      <div className="arrays-header">
        <p className="section-label">DSA / ARRAYS</p>

        <h1>Array Problems 📊</h1>

        <p>
          Practice important array problems commonly asked in coding interviews.
        </p>
        <div className="progress-summary">
          <span>
            {solvedQuestions.length} / {questions.length} Solved
          </span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  questions.length > 0
                    ? `${(solvedQuestions.length / questions.length) * 100}%`
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
          questions.map((question) => (
            <div className="question-card" key={question.questionId}>
              <div className="question-info">
                <span className="question-number">#{question.questionId}</span>

                <h2>{question.title}</h2>
              </div>

              <div className="question-actions">
                <span
                  className={`difficulty ${question.difficulty.toLowerCase()}`}
                >
                  {question.difficulty}
                </span>

                {solvedQuestions.includes(question.questionId) ? (
                  <Link
                    to={`/practice/dsa/arrays/${question.questionId}`}
                    className="btn solved-btn"
                  >
                    ✓ Solved
                  </Link>
                ) : (
                  <Link
                    to={`/practice/dsa/arrays/${question.questionId}`}
                    className="btn primary-btn"
                  >
                    Solve →
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>

      <div className="back-section">
        <Link to="/practice/dsa" className="back-link">
          ← Back to DSA
        </Link>
      </div>
    </div>
  );
}

export default Arrays;
