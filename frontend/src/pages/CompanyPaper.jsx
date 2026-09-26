import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CompanyPaper() {
  const { slug, year } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [company, setCompany] = useState(null);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openSolution, setOpenSolution] = useState(null);

  const categories = [
    "all",
    "programming",
    "aptitude",
    "reasoning",
    "comprehension",
  ];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("placementproToken");

        let url =
          `http://localhost:5000/api/companies/${slug}/${year}/questions`;

        if (category !== "all") {
          url += `?category=${category}`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load questions."
          );
        }

        setQuestions(data.questions || []);
        setCompany(data.company);
        setOpenSolution(null);
      } catch (error) {
        console.error("Company paper error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [slug, year, category]);

  const formatCategory = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="company-paper-page">
      <button
        className="company-back-button"
        onClick={() => navigate(`/companies/${slug}`)}
      >
        ← Back to {company?.name || "Company"}
      </button>

      <div className="company-paper-header">
        <span className="companies-label">
          REPORTED PREVIOUS-YEAR PAPER
        </span>

        <h1>
          {company?.name || slug.toUpperCase()} {year}
        </h1>

        <p>
          A merged collection of reported and memory-based
          questions from {year}.
        </p>
      </div>

      <div className="company-category-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "company-filter active"
                : "company-filter"
            }
            onClick={() => setCategory(item)}
          >
            {formatCategory(item)}
          </button>
        ))}
      </div>

      {loading && (
        <p className="company-paper-message">
          Loading questions...
        </p>
      )}

      {error && (
        <p className="company-paper-message">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div className="company-question-count">
            {questions.length}{" "}
            {questions.length === 1
              ? "Question"
              : "Questions"}
          </div>

          <div className="company-questions-list">
            {questions.map((question, index) => (
              <div
                className="company-question-card"
                key={question._id || question.questionId}
              >
                <div className="company-question-top">
                  <span className="question-number">
                    Question {index + 1}
                  </span>

                  <div className="question-badges">
                    <span className="category-badge">
                      {formatCategory(question.category)}
                    </span>

                    <span className="difficulty-badge">
                      {question.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="company-question-text">
                  {question.question}
                </h3>

                {question.options?.length > 0 && (
                  <div className="company-question-options">
                    {question.options.map(
                      (option, optionIndex) => (
                        <div
                          className="company-option"
                          key={optionIndex}
                        >
                          <span>
                            {String.fromCharCode(
                              65 + optionIndex
                            )}
                          </span>

                          <p>{option}</p>
                        </div>
                      )
                    )}
                  </div>
                )}

                {question.programmingLanguage && (
                  <div className="programming-language">
                    Language:{" "}
                    <strong>
                      {question.programmingLanguage}
                    </strong>
                  </div>
                )}

                <button
                  className="view-solution-button"
                  onClick={() =>
                    setOpenSolution(
                      openSolution === question.questionId
                        ? null
                        : question.questionId
                    )
                  }
                >
                  {openSolution === question.questionId
                    ? "Hide Solution"
                    : "View Solution"}
                </button>

                {openSolution === question.questionId && (
                  <div className="company-solution">
                    <h4>Answer</h4>

                    <p>{question.answer}</p>

                    <h4>Solution</h4>

                    <pre>{question.solution}</pre>

                    {question.sourceName && (
                      <div className="question-source">
                        <strong>Source:</strong>{" "}
                        {question.sourceName}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {questions.length === 0 && (
            <div className="company-empty-paper">
              No questions are available in this category yet.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CompanyPaper;