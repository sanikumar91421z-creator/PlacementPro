import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MockTests() {
  const navigate = useNavigate();

  const [mockTests, setMockTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const token = localStorage.getItem("placementproToken");

        const [testsResponse, progressResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/mock-tests", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),

          axios.get("http://localhost:5000/api/progress/mock-tests", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (testsResponse.data.success) {
          setMockTests(testsResponse.data.mockTests);
        }

        if (progressResponse.data.success) {
          setProgress(progressResponse.data);
        }
      } catch (error) {
        console.error(
          "Mock test loading error:",
          error.response?.data?.message || error.message,
        );

        setError("Unable to load mock tests.");
      } finally {
        setLoading(false);
      }
    };

    fetchMockTests();
  }, []);

  const handleStartTest = (testId) => {
    navigate(`/practice/mock-tests/${testId}`);
  };

  return (
    <div className="practice-page">
      <div className="practice-header">
        <p className="section-label">MOCK TESTS</p>

        <h1>Placement Mock Tests 📝</h1>

        <p>Test your preparation with placement-focused mock tests.</p>
      </div>
      {progress && (
        <div className="mock-progress-card">
          <div className="mock-progress-top">
            <div>
              <p className="section-label">YOUR PROGRESS</p>

              <h2>Mock Test Progress</h2>

              <p>
                {progress.testsAttempted} of {progress.totalMockTests} tests
                attempted
              </p>
            </div>

            <div className="mock-progress-percentage">
              {progress.progressPercentage}%
            </div>
          </div>

          <div className="mock-progress-bar">
            <div
              className="mock-progress-fill"
              style={{
                width: `${progress.progressPercentage}%`,
              }}
            />
          </div>

          <div className="mock-progress-stats">
            <div>
              <strong>{progress.totalAttempts}</strong>
              <span>Total Attempts</span>
            </div>

            <div>
              <strong>{progress.bestPercentage}%</strong>
              <span>Best Score</span>
            </div>

            <div>
              <strong>{progress.averagePercentage}%</strong>
              <span>Average Score</span>
            </div>
          </div>
        </div>
      )}

      {loading && <p className="mock-test-message">Loading mock tests...</p>}

      {error && <p className="mock-test-message">{error}</p>}

      {!loading && !error && (
        <div className="mock-test-grid">
          {mockTests.map((test) => (
            <div className="mock-test-card" key={test.testId}>
              <div className="mock-test-icon">📝</div>

              <h2>{test.title}</h2>

              <p>{test.description}</p>

              <div className="mock-test-details">
                <span>📚 {test.questionCount} Questions</span>

                <span>⏱ {test.duration} Minutes</span>

                <span>🎯 {test.totalMarks} Marks</span>
              </div>
              {progress?.attemptedTestIds?.includes(test.testId) && (
                <div className="mock-attempted-badge">✓ Attempted</div>
              )}

              <button
                type="button"
                onClick={() => handleStartTest(test.testId)}
              >
                {progress?.attemptedTestIds?.includes(test.testId)
                  ? "Try Again →"
                  : "Start Test →"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MockTests;
