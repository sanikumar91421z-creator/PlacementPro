import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MockTests() {
  const navigate = useNavigate();

  const [mockTests, setMockTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const token = localStorage.getItem("placementproToken");

        const response = await axios.get(
          "http://localhost:5000/api/mock-tests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setMockTests(response.data.mockTests);
        }
      } catch (error) {
        console.error(
          "Mock test loading error:",
          error.response?.data?.message || error.message
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

        <p>
          Test your preparation with placement-focused mock tests.
        </p>
      </div>

      {loading && (
        <p className="mock-test-message">
          Loading mock tests...
        </p>
      )}

      {error && (
        <p className="mock-test-message">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="mock-test-grid">
          {mockTests.map((test) => (
            <div
              className="mock-test-card"
              key={test.testId}
            >
              <div className="mock-test-icon">📝</div>

              <h2>{test.title}</h2>

              <p>{test.description}</p>

              <div className="mock-test-details">
                <span>
                  📚 {test.questionCount} Questions
                </span>

                <span>
                  ⏱ {test.duration} Minutes
                </span>

                <span>
                  🎯 {test.totalMarks} Marks
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleStartTest(test.testId)}
              >
                Start Test →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MockTests;