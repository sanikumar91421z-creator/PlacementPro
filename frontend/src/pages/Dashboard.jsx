import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);

  const [dsaProgress, setDsaProgress] = useState({
    solvedCount: 0,
  });

  const [aptitudeProgress, setAptitudeProgress] = useState({
    attemptedCount: 0,
    solvedCount: 0,
    totalQuestions: 230,
    accuracy: 0,
  });

  const [mockProgress, setMockProgress] = useState({
    testsAttempted: 0,
    totalMockTests: 3,
    bestPercentage: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const savedUser = localStorage.getItem("placementproUser");
        const token = localStorage.getItem("placementproToken");

        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [dsaResponse, aptitudeResponse, mockResponse] = await Promise.all(
          [
            fetch("http://localhost:5000/api/progress", {
              headers,
            }),

            fetch("http://localhost:5000/api/progress/aptitude", {
              headers,
            }),

            fetch("http://localhost:5000/api/progress/mock-tests", {
              headers,
            }),
          ],
        );

        const [dsaData, aptitudeData, mockData] = await Promise.all([
          dsaResponse.json(),
          aptitudeResponse.json(),
          mockResponse.json(),
        ]);

        if (!dsaResponse.ok) {
          throw new Error(dsaData.message || "Unable to load DSA progress.");
        }

        if (!aptitudeResponse.ok) {
          throw new Error(
            aptitudeData.message || "Unable to load aptitude progress.",
          );
        }

        if (!mockResponse.ok) {
          throw new Error(
            mockData.message || "Unable to load mock test progress.",
          );
        }

        setDsaProgress(dsaData);
        setAptitudeProgress(aptitudeData);
        setMockProgress(mockData);
      } catch (error) {
        console.error("Dashboard error:", error);

        setError("Unable to load dashboard progress.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);
  const dsaPercentage = Math.round(
    ((dsaProgress.solvedCount || 0) / 175) * 100,
  );

  const aptitudePercentage = Math.round(
    ((aptitudeProgress.attemptedCount || 0) /
      (aptitudeProgress.totalQuestions || 230)) *
      100,
  );

  const mockPercentage =
    mockProgress.totalMockTests > 0
      ? Math.round(
          ((mockProgress.testsAttempted || 0) / mockProgress.totalMockTests) *
            100,
        )
      : 0;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <span className="section-label">YOUR DASHBOARD</span>

          <h1>Welcome back{user?.name ? `, ${user.name}` : ""} 👋</h1>

          <p>
            Track your placement preparation and continue practicing from where
            you left off.
          </p>
        </div>

        {loading && (
          <p className="dashboard-message">Loading your progress...</p>
        )}

        {error && <p className="dashboard-error">{error}</p>}

        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">💻</div>

            <div>
              <span>DSA Progress</span>

              <h2>{dsaProgress.solvedCount || 0} / 175</h2>

              <p>Questions solved</p>
              <div className="dashboard-progress">
                <div
                  className="dashboard-progress-fill"
                  style={{ width: `${dsaPercentage}%` }}
                ></div>
              </div>

              <small>{dsaPercentage}% completed</small>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">🧠</div>

            <div>
              <span>Aptitude Progress</span>

              <h2>
                {aptitudeProgress.attemptedCount || 0} /{" "}
                {aptitudeProgress.totalQuestions || 230}
              </h2>

              <p>
                Questions attempted
                {aptitudeProgress.attemptedCount > 0 &&
                  ` • ${aptitudeProgress.accuracy}% accuracy`}
              </p>
              <div className="dashboard-progress">
                <div
                  className="dashboard-progress-fill"
                  style={{ width: `${aptitudePercentage}%` }}
                ></div>
              </div>

              <small>{aptitudePercentage}% completed</small>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">📝</div>

            <div>
              <span>Mock Tests</span>

              <h2>
                {mockProgress.testsAttempted || 0} /{" "}
                {mockProgress.totalMockTests || 3}
              </h2>

              <p>
                Tests completed
                {mockProgress.testsAttempted > 0 &&
                  ` • Best ${mockProgress.bestPercentage}%`}
              </p>
              <div className="dashboard-progress">
                <div
                  className="dashboard-progress-fill"
                  style={{ width: `${mockPercentage}%` }}
                ></div>
              </div>

              <small>{mockPercentage}% completed</small>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <span className="section-label">CONTINUE PREPARING</span>

              <h2>Practice Areas</h2>
            </div>
          </div>

          <div className="dashboard-practice-grid">
            <div className="dashboard-practice-card">
              <span className="dashboard-card-icon">💻</span>

              <h3>DSA Practice</h3>

              <p>
                Strengthen your problem-solving skills with topic-wise DSA
                questions.
              </p>

              <Link to="/practice/dsa" className="dashboard-card-link">
                Continue DSA →
              </Link>
            </div>

            <div className="dashboard-practice-card">
              <span className="dashboard-card-icon">🧠</span>

              <h3>Aptitude</h3>

              <p>
                Practice quantitative, logical reasoning, and verbal ability
                questions.
              </p>

              <Link to="/practice/aptitude" className="dashboard-card-link">
                Practice Aptitude →
              </Link>
            </div>

            <div className="dashboard-practice-card">
              <span className="dashboard-card-icon">📝</span>

              <h3>Mock Tests</h3>

              <p>
                Test your preparation with timed placement mock examinations.
              </p>

              <Link to="/practice/mock-tests" className="dashboard-card-link">
                Take a Test →
              </Link>
            </div>

            <div className="dashboard-practice-card">
              <span className="dashboard-card-icon">🏢</span>

              <h3>Company Preparation</h3>

              <p>
                Explore company-specific placement questions and practice
                papers.
              </p>

              <Link to="/companies" className="dashboard-card-link">
                Explore Companies →
              </Link>
            </div>
            {mockProgress.recentAttempts?.length > 0 && (
              <div className="dashboard-section dashboard-recent-section">
                <div className="dashboard-section-heading">
                  <div>
                    <span className="section-label">RECENT ACTIVITY</span>
                    <h2>Recent Mock Tests</h2>
                  </div>

                  <Link
                    to="/practice/mock-tests"
                    className="dashboard-view-all"
                  >
                    View Tests →
                  </Link>
                </div>

                <div className="dashboard-recent-list">
                  {mockProgress.recentAttempts.map((attempt, index) => (
                    <div
                      className="dashboard-recent-item"
                      key={attempt.attemptId}
                    >
                      <div className="dashboard-attempt-info">
                        <span className="dashboard-attempt-number">
                          {index + 1}
                        </span>

                        <div>
                          <h3>Mock Test {attempt.testId}</h3>

                          <p>
                            {attempt.correctAnswers} correct •{" "}
                            {attempt.wrongAnswers} wrong • {attempt.unanswered}{" "}
                            unanswered
                          </p>
                        </div>
                      </div>

                      <div className="dashboard-attempt-score">
                        <strong>{attempt.percentage}%</strong>

                        <span>
                          {attempt.score} / {attempt.totalMarks}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
