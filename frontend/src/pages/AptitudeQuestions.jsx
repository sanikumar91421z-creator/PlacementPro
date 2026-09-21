import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function AptitudeQuestions() {
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic");

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerResult, setAnswerResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError("");
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setAnswerResult(null);

        const token = localStorage.getItem(
          "placementproToken"
        );

        if (!token) {
          setError("Please login to practice aptitude.");
          return;
        }

        let url =
          "http://localhost:5000/api/aptitude/questions";

        if (topic) {
          url += `?topic=${encodeURIComponent(topic)}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setQuestions(response.data.questions);
        }
      } catch (error) {
        console.error(
          "Aptitude questions loading error:",
          error
        );

        if (error.response?.status === 401) {
          setError(
            "Your session has expired. Please login again."
          );
        } else {
          setError(
            "Unable to load aptitude questions."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topic]);

  const handleCheckAnswer = async () => {
    if (
      selectedAnswer === null ||
      !questions[currentIndex]
    ) {
      return;
    }

    try {
      setChecking(true);
      setError("");

      const token = localStorage.getItem(
        "placementproToken"
      );

      const response = await axios.post(
        "http://localhost:5000/api/aptitude/check",
        {
          questionId:
            questions[currentIndex].questionId,
          selectedAnswer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setAnswerResult(response.data);
      }
    } catch (error) {
      console.error(
        "Answer check error:",
        error
      );

      if (error.response?.status === 401) {
        setError(
          "Your session has expired. Please login again."
        );
      } else {
        setError(
          "Unable to check your answer."
        );
      }
    } finally {
      setChecking(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(
        (previousIndex) => previousIndex + 1
      );

      setSelectedAnswer(null);
      setAnswerResult(null);
      setError("");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(
        (previousIndex) => previousIndex - 1
      );

      setSelectedAnswer(null);
      setAnswerResult(null);
      setError("");
    }
  };

  if (loading) {
    return (
      <div className="practice-page">
        <p>Loading aptitude questions...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="practice-page">
        <Link
          to="/practice/aptitude"
          className="aptitude-back-link"
        >
          ← Back to Aptitude
        </Link>

        <div className="aptitude-empty-state">
          <h2>No Questions Available Yet</h2>

          <p>
            We haven't added questions for{" "}
            <strong>{topic || "this topic"}</strong>{" "}
            yet.
          </p>

          <Link
            to="/practice/aptitude"
            className="btn primary-btn"
          >
            Choose Another Topic
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion =
    questions[currentIndex];

  const progress =
    ((currentIndex + 1) /
      questions.length) *
    100;

  return (
    <div className="practice-page aptitude-practice-page">
      <div className="aptitude-question-navigation">
        <Link
          to="/practice/aptitude"
          className="aptitude-back-link"
        >
          ← Back to Aptitude
        </Link>

        <span>
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="aptitude-practice-header">
        <p className="section-label">
          APTITUDE PRACTICE
        </p>

        <h1>
          {currentQuestion.topic}
        </h1>

        <p>
          {currentQuestion.category}
        </p>
      </div>

      <div className="question-progress-container">
        <div className="question-progress-info">
          <span>
            Question {currentIndex + 1} of{" "}
            {questions.length}
          </span>

          <span>
            {Math.round(progress)}%
          </span>
        </div>

        <div className="question-progress-track">
          <div
            className="question-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {error && (
        <div className="aptitude-error-message">
          {error}
        </div>
      )}

      <div className="aptitude-question-card">
        <div className="aptitude-question-top">
          <span>
            Question {currentIndex + 1}
          </span>

          <span className="difficulty-badge">
            {currentQuestion.difficulty}
          </span>
        </div>

        <p className="aptitude-topic">
          {currentQuestion.category}
          {" • "}
          {currentQuestion.topic}
        </p>

        <h2>
          {currentQuestion.question}
        </h2>

        <div className="aptitude-options">
          {currentQuestion.options.map(
            (option, index) => {
              let optionClass =
                "aptitude-option";

              if (answerResult) {
                if (
                  index ===
                  answerResult.correctAnswer
                ) {
                  optionClass +=
                    " correct-option";
                } else if (
                  index === selectedAnswer &&
                  !answerResult.isCorrect
                ) {
                  optionClass +=
                    " wrong-option";
                }
              } else if (
                selectedAnswer === index
              ) {
                optionClass +=
                  " selected-option";
              }

              return (
                <button
                  type="button"
                  key={index}
                  className={optionClass}
                  disabled={Boolean(
                    answerResult
                  )}
                  onClick={() =>
                    setSelectedAnswer(index)
                  }
                >
                  <span>
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  {option}
                </button>
              );
            }
          )}
        </div>

        {!answerResult ? (
          <button
            type="button"
            className="btn primary-btn aptitude-check-btn"
            onClick={handleCheckAnswer}
            disabled={
              selectedAnswer === null ||
              checking
            }
          >
            {checking
              ? "Checking..."
              : "Check Answer"}
          </button>
        ) : (
          <div className="aptitude-result">
            <h3
              className={
                answerResult.isCorrect
                  ? "answer-correct"
                  : "answer-wrong"
              }
            >
              {answerResult.isCorrect
                ? "✓ Correct Answer!"
                : "✗ Incorrect Answer"}
            </h3>

            <p>
              <strong>
                Explanation:
              </strong>{" "}
              {answerResult.explanation}
            </p>
          </div>
        )}

        <div className="aptitude-question-actions">
          <button
            type="button"
            className="aptitude-secondary-btn"
            onClick={
              handlePreviousQuestion
            }
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>

          {currentIndex <
          questions.length - 1 ? (
            <button
              type="button"
              className="btn primary-btn"
              onClick={handleNextQuestion}
              disabled={!answerResult}
            >
              Next Question →
            </button>
          ) : (
            answerResult && (
              <Link
                to="/practice/aptitude"
                className="btn primary-btn"
              >
                Finish Practice ✓
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AptitudeQuestions;