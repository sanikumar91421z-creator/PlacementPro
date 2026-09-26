import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Companies() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem("placementproToken");

        const response = await fetch(
          "http://localhost:5000/api/companies",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load companies."
          );
        }

        setCompanies(data.companies);
      } catch (error) {
        console.error("Companies error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="companies-page">
        <p>Loading companies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="companies-page">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="companies-page">
      <div className="companies-header">
        <span className="companies-label">
          COMPANY PREPARATION
        </span>

        <h1>Company-Wise Questions 🏢</h1>

        <p>
          Explore company information and reported
          previous-year questions with solutions.
        </p>
      </div>

      <div className="companies-grid">
        {companies.map((company) => (
          <div
            className="company-card"
            key={company.companyId}
            onClick={() =>
              navigate(`/companies/${company.slug}`)
            }
          >
            <div className="company-icon">🏢</div>

            <h2>{company.name}</h2>

            <p>{company.description}</p>

            <div className="company-years">
              {company.availableYears?.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>

            <button
              onClick={(event) => {
                event.stopPropagation();

                navigate(
                  `/companies/${company.slug}`
                );
              }}
            >
              Explore Company →
            </button>
          </div>
        ))}
      </div>

      {companies.length === 0 && (
        <p className="no-companies">
          No companies available yet.
        </p>
      )}
    </div>
  );
}

export default Companies;