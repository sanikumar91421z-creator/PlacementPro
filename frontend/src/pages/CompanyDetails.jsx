import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CompanyDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const token = localStorage.getItem("placementproToken");

        const response = await fetch(
          `http://localhost:5000/api/companies/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load company."
          );
        }

        setCompany(data.company);
      } catch (error) {
        console.error("Company details error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [slug]);

  if (loading) {
    return (
      <div className="company-details-page">
        <p>Loading company...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="company-details-page">
        <p>{error}</p>
      </div>
    );
  }

  if (!company) {
    return null;
  }

  return (
    <div className="company-details-page">

      <button
        className="company-back-button"
        onClick={() => navigate("/companies")}
      >
        ← Back to Companies
      </button>

      <div className="company-details-header">
        <div className="company-details-icon">
          🏢
        </div>

        <div>
          <span className="companies-label">
            COMPANY PREPARATION
          </span>

          <h1>{company.name}</h1>

          <p>{company.description}</p>
        </div>
      </div>

      <div className="company-info-grid">

        <div className="company-info-card">
          <h2>Selection Process</h2>

          <ul>
            {company.selectionProcess?.map(
              (step, index) => (
                <li key={index}>{step}</li>
              )
            )}
          </ul>
        </div>

        <div className="company-info-card">
          <h2>Eligibility</h2>

          <ul>
            {company.eligibility?.map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>

        <div className="company-info-card">
          <h2>Preparation Tips</h2>

          <ul>
            {company.preparationTips?.map(
              (tip, index) => (
                <li key={index}>{tip}</li>
              )
            )}
          </ul>
        </div>

      </div>

      <div className="company-papers-section">

        <span className="companies-label">
          PREVIOUS-YEAR QUESTIONS
        </span>

        <h2>Reported Previous-Year Papers</h2>

        <p className="papers-description">
          Practice reported and memory-based questions
          collected from previous placement examinations.
        </p>

        <div className="company-papers-grid">

          {company.availableYears?.map((year) => (
            <div
              className="company-paper-card"
              key={year}
              onClick={() =>
                navigate(
                  `/companies/${company.slug}/${year}`
                )
              }
            >
              <div className="paper-icon">📄</div>

              <div>
                <h3>{company.name} {year}</h3>

                <p>
                  Merged reported previous-year paper
                </p>
              </div>

              <span className="paper-arrow">→</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default CompanyDetails;