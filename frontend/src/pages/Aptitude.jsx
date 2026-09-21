import { useNavigate } from "react-router-dom";

function Aptitude() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Quantitative Aptitude",
      icon: "🧮",
      description:
        "Sharpen your numerical skills with topic-wise practice questions.",

      topics: [
        {
          name: "Percentage",
          icon: "%",
          topic: "percentage",
          description: "Practice percentage based problems.",
        },
        {
          name: "Profit & Loss",
          icon: "📈",
          topic: "profit and loss",
          description: "Solve profit, loss and discount problems.",
        },
        {
          name: "Ratio & Proportion",
          icon: "⚖",
          topic: "ratio and proportion",
          description: "Learn ratio and proportion concepts.",
        },
        {
          name: "Average",
          icon: "▥",
          topic: "average",
          description: "Practice average based questions.",
        },
        {
          name: "Time & Work",
          icon: "◷",
          topic: "time and work",
          description: "Practice time, work and efficiency problems.",
        },
        {
          name: "Time, Speed & Distance",
          icon: "🚗",
          topic: "time speed and distance",
          description: "Solve speed, time and distance questions.",
        },
        {
          name: "Simple & Compound Interest",
          icon: "₹",
          topic: "simple and compound interest",
          description: "Practice simple and compound interest.",
        },
        {
          name: "Number System / HCF & LCM",
          icon: "123",
          topic: "number system",
          description: "Practice numbers, divisibility, HCF and LCM.",
        },
        {
          name: "Probability",
          icon: "🎲",
          topic: "probability",
          description: "Solve probability based placement problems.",
        },
        {
          name: "Permutation & Combination",
          icon: "nPr",
          topic: "permutation and combination",
          description: "Practice arrangements and combinations.",
        },
        {
          name: "Data Interpretation",
          icon: "📊",
          topic: "data interpretation",
          description: "Analyse tables, charts and numerical data.",
        },
      ],
    },

    {
      title: "Logical Reasoning",
      icon: "🧠",
      description: "Enhance your reasoning and analytical skills.",

      topics: [
        {
          name: "Number Series",
          icon: "#",
          topic: "number series",
          description: "Identify patterns and find missing numbers.",
        },
        {
          name: "Coding-Decoding",
          icon: "</>",
          topic: "coding-decoding",
          description: "Solve coding and decoding problems.",
        },
        {
          name: "Blood Relations",
          icon: "👥",
          topic: "blood relations",
          description: "Practice family and relationship problems.",
        },
        {
          name: "Direction Sense",
          icon: "🧭",
          topic: "direction sense",
          description: "Solve direction and distance problems.",
        },
        {
          name: "Syllogism",
          icon: "▤",
          topic: "syllogism",
          description: "Practice statement and conclusion problems.",
        },
        {
          name: "Seating Arrangement",
          icon: "◉",
          topic: "seating arrangement",
          description: "Solve linear and circular seating problems.",
        },
        {
          name: "Logical / Analytical Reasoning",
          icon: "🧩",
          topic: "analytical reasoning",
          description: "Practice puzzles and analytical reasoning.",
        },
      ],
    },

    {
      title: "Verbal Ability",
      icon: "📖",
      description: "Build your English language and comprehension skills.",

      topics: [
        {
          name: "Grammar",
          icon: "📚",
          topic: "grammar",
          description: "Improve grammar and language fundamentals.",
        },
        {
          name: "Synonyms & Antonyms",
          icon: "A",
          topic: "synonyms and antonyms",
          description: "Improve vocabulary with synonyms and antonyms.",
        },
        {
          name: "Sentence Correction",
          icon: "✎",
          topic: "sentence correction",
          description: "Identify and correct errors in sentences.",
        },
        {
          name: "Fill in the Blanks",
          icon: "___",
          topic: "fill in the blanks",
          description: "Choose suitable words to complete sentences.",
        },
        {
          name: "Reading Comprehension",
          icon: "📄",
          topic: "reading comprehension",
          description: "Read passages and answer comprehension questions.",
        },
      ],
    },
  ];

  const handlePractice = (topic) => {
    navigate(`/practice/aptitude/questions?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div className="aptitude-dashboard">
      <section className="aptitude-hero">
        <div className="aptitude-hero-content">
          <p className="section-label">APTITUDE PRACTICE</p>

          <h1>Practice Aptitude</h1>

          <p className="aptitude-subtitle">
            Improve your quantitative, logical and verbal skills with carefully
            selected questions.
          </p>

          <div className="aptitude-highlights">
            <div className="aptitude-highlight-item">
              <span className="highlight-icon">◉</span>

              <div>
                <strong>100+ Questions</strong>
                <small>Across all topics</small>
              </div>
            </div>

            <div className="aptitude-highlight-item">
              <span className="highlight-icon">▥</span>

              <div>
                <strong>Track Progress</strong>
                <small>See your improvement</small>
              </div>
            </div>

            <div className="aptitude-highlight-item">
              <span className="highlight-icon">◎</span>

              <div>
                <strong>Crack Placement</strong>
                <small>Practice. Learn. Get Placed.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="aptitude-progress-card">
          <div className="progress-card-icon">▥</div>

          <div className="progress-card-content">
            <span>Your Progress</span>

            <strong>0 / 15 Solved</strong>

            <div className="aptitude-progress-row">
              <div className="aptitude-progress-track">
                <div
                  className="aptitude-progress-value"
                  style={{ width: "0%" }}
                />
              </div>

              <span className="aptitude-progress-percent">0%</span>
            </div>
          </div>
        </div>
      </section>

      <div className="aptitude-sections">
        {sections.map((section) => (
          <section className="aptitude-topic-section" key={section.title}>
            <div className="aptitude-section-heading">
              <div className="aptitude-section-title">
                <h2>
                  <span>{section.icon}</span>
                  {section.title}
                </h2>

                <p>{section.description}</p>
              </div>

              <span className="aptitude-topic-count">
                {section.topics.length} topics
              </span>
            </div>

            <div className="aptitude-topic-grid">
              {section.topics.map((topic) => (
                <article className="aptitude-topic-card" key={topic.name}>
                  <div className="aptitude-topic-icon">{topic.icon}</div>

                  <h3>{topic.name}</h3>

                  <p>{topic.description}</p>

                  <div className="aptitude-card-footer">
                    <span>Practice Questions</span>

                    <button
                      type="button"
                      onClick={() => handlePractice(topic.topic)}
                    >
                      Practice →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Aptitude;
