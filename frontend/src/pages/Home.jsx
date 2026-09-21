import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="landing-page">

      {/* HERO */}
      <section className="landing-hero">
        <div className="hero-content">

          <p className="section-label">
            YOUR PLACEMENT PREPARATION PARTNER
          </p>

          <h1>
            Prepare Smarter.
            <span> Get Placed Faster.</span>
          </h1>

          <p className="hero-description">
            Practice DSA, improve your aptitude,
            take mock tests, and prepare confidently
            for your dream placement.
          </p>

          <div className="hero-buttons">
            <Link
              to="/practice"
              className="btn primary-btn"
            >
              Start Preparing →
            </Link>

            <a
              href="#about"
              className="btn secondary-btn"
            >
              Learn More
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="code-window">

            <div className="code-window-top">
              <span></span>
              <span></span>
              <span></span>

              <p>PlacementPro.java</p>
            </div>

            <pre>
{`class PlacementPro {

  public static void main(String[] args) {

    String goal = "Dream Job";

    practiceDSA();
    improveAptitude();
    takeMockTests();

    System.out.println(goal);
  }
}`}
            </pre>

          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="landing-features">

        <div className="section-heading">
          <p className="section-label">
            EVERYTHING YOU NEED
          </p>

          <h2>
            Prepare for placements in one place
          </h2>

          <p>
            Build the skills companies expect from
            candidates during placement drives.
          </p>
        </div>


        <div className="landing-feature-grid">

          <div className="landing-feature-card">
            <div className="feature-number">01</div>

            <h3>DSA Practice</h3>

            <p>
              Practice important Data Structures and
              Algorithms problems commonly asked in
              technical interviews.
            </p>

            <Link to="/practice/dsa">
              Start Coding →
            </Link>
          </div>


          <div className="landing-feature-card">
            <div className="feature-number">02</div>

            <h3>Aptitude Practice</h3>

            <p>
              Strengthen quantitative aptitude,
              logical reasoning and problem-solving
              skills for placement exams.
            </p>

            <Link to="/practice/aptitude">
              Start Practicing →
            </Link>
          </div>


          <div className="landing-feature-card">
            <div className="feature-number">03</div>

            <h3>Mock Tests</h3>

            <p>
              Test your preparation with
              placement-focused mock tests and
              understand where you need improvement.
            </p>

            <Link to="/practice/mock-tests">
              Take a Test →
            </Link>
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="how-it-works">

        <div className="section-heading">
          <p className="section-label">
            SIMPLE PROCESS
          </p>

          <h2>How PlacementPro Works</h2>

          <p>
            Follow a structured preparation process
            from learning to testing.
          </p>
        </div>


        <div className="steps-container">

          <div className="step-card">
            <span>01</span>
            <h3>Learn</h3>
            <p>
              Understand important concepts and
              placement topics.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step-card">
            <span>02</span>
            <h3>Practice</h3>
            <p>
              Solve DSA and aptitude questions
              regularly.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step-card">
            <span>03</span>
            <h3>Test</h3>
            <p>
              Take mock tests and evaluate your
              preparation.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step-card">
            <span>04</span>
            <h3>Improve</h3>
            <p>
              Identify weak areas and prepare
              smarter.
            </p>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section
        className="about-section"
        id="about"
      >

        <div className="about-left">

          <p className="section-label">
            ABOUT US
          </p>

          <h2>
            Built to make placement preparation
            simpler.
          </h2>

        </div>


        <div className="about-right">

          <p>
            PlacementPro is a placement preparation
            platform designed to help students
            strengthen their DSA, aptitude and
            interview preparation skills in one
            place.
          </p>

          <p>
            Our goal is to provide a structured
            environment where students can practice
            coding problems, improve aptitude,
            attempt mock tests and prepare
            confidently for placement opportunities.
          </p>

          <Link
            to="/practice"
            className="about-link"
          >
            Explore Practice →
          </Link>

        </div>

      </section>


      {/* CTA */}
      <section className="landing-cta">

        <p className="section-label">
          START TODAY
        </p>

        <h2>
          Ready to start your placement preparation?
        </h2>

        <p>
          Practice consistently, improve your skills
          and move one step closer to your dream job.
        </p>

        <Link
          to="/practice"
          className="btn primary-btn"
        >
          Start Preparing →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="landing-footer">

        <div>
          <h3>PlacementPro</h3>

          <p>
            Prepare smarter. Get placed faster.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/practice">Practice</Link>
          <a href="#about">About</a>
          <Link to="/login">Login</Link>
        </div>

        <p className="copyright">
          © 2026 PlacementPro
        </p>

      </footer>

    </main>
  );
}

export default Home;