import { useLocation, useNavigate } from "react-router-dom";

function MockTestResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;

  if (!result) {
    return (
      <div className="mock-result-page">
        <div className="mock-result-card">
          <h2>Result Not Available</h2>

          <p>No mock test result was found.</p>

          <button
            type="button"
            onClick={() => navigate("/practice/mock-tests")}
          >
            Back to Mock Tests
          </button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="mock-result-page">
      <div className="mock-result-card">
        <div className="mock-result-icon">✓</div>

        <p className="section-label">TEST COMPLETED</p>

        <h1>{result.title}</h1>

        <p className="mock-result-subtitle">
          Your mock test has been submitted successfully.
        </p>

        <div className="mock-score-circle">
          <strong>{result.percentage}%</strong>
          <span>Your Score</span>
        </div>

        <h2>
          {result.score} / {result.totalMarks} Marks
        </h2>

        <div className="mock-result-stats">
          <div className="mock-result-stat">
            <strong>{result.totalQuestions}</strong>
            <span>Total Questions</span>
          </div>

          <div className="mock-result-stat">
            <strong>{result.correctAnswers}</strong>
            <span>Correct</span>
          </div>

          <div className="mock-result-stat">
            <strong>{result.wrongAnswers}</strong>
            <span>Wrong</span>
          </div>

          <div className="mock-result-stat">
            <strong>{result.unanswered}</strong>
            <span>Unanswered</span>
          </div>

          <div className="mock-result-stat">
            <strong>{formatTime(result.timeTaken)}</strong>
            <span>Time Taken</span>
          </div>
        </div>

        <div className="mock-result-actions">
          <button
            type="button"
            onClick={() => navigate("/practice/mock-tests")}
          >
            Back to Mock Tests
          </button>

          <button
            type="button"
            onClick={() =>
              navigate(`/practice/mock-tests/${result.testId}`)
            }
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default MockTestResult;