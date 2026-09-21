import { Link } from "react-router-dom";

function Practice() {
  return (
    <div className="practice-page">

      {/* Header */}
      <div className="practice-header">
        <p className="section-label">PRACTICE</p>

        <h1>
          Practice. Improve. Get Placed. 🚀
        </h1>

        <p>
          Improve your skills with focused placement preparation.
        </p>
      </div>


      {/* Practice Cards */}
      <div className="practice-container">

        {/* DSA */}
        <div className="practice-card">

          <div className="practice-icon">
            📚
          </div>

          <h2>DSA</h2>

          <p>
            Learn and practice Data Structures and Algorithms
            questions commonly asked in technical interviews.
          </p>

          <Link
            to="/practice/dsa"
            className="btn primary-btn practice-btn"
          >
            Start DSA →
          </Link>

        </div>


        {/* Aptitude */}
        <div className="practice-card">

          <div className="practice-icon">
            🧠
          </div>

          <h2>Aptitude</h2>

          <p>
            Improve quantitative aptitude, logical reasoning,
            and problem-solving skills.
          </p>

          <Link
            to="/practice/aptitude"
            className="btn primary-btn practice-btn"
          >
            Start Aptitude →
          </Link>

        </div>


        {/* Mock Tests */}
        <div className="practice-card">

          <div className="practice-icon">
            📝
          </div>

          <h2>Mock Tests</h2>

          <p>
            Test your preparation with placement-oriented
            mock tests.
          </p>

          <Link
            to="/practice/mock-tests"
            className="btn primary-btn practice-btn"
          >
            Take Test →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Practice;