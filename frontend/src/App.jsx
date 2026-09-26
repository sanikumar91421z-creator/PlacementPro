import Companies from "./pages/Companies";
import CompanyPaper from "./pages/CompanyPaper";
import CompanyDetails from "./pages/CompanyDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";
import DSATopic from "./pages/DSATopic";
import "./App.css";
import MockTestExam from "./pages/MockTestExam";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import DSA from "./pages/DSA";
import Aptitude from "./pages/Aptitude";
import MockTests from "./pages/MockTests";
import Arrays from "./pages/Arrays";
import Question from "./pages/Question";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AptitudeQuestions from "./pages/AptitudeQuestions";
import MockTestResult from "./pages/MockTestResult";
// ==========================================
// NAVBAR
// ==========================================

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  // Get logged-in user
  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("placementproToken");

      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          localStorage.removeItem("placementproToken");

          localStorage.removeItem("placementproUser");

          setUser(null);

          return;
        }

        setUser(data.user);

        localStorage.setItem("placementproUser", JSON.stringify(data.user));
      } catch (error) {
        console.error("Authentication check failed:", error);
      }
    };

    verifyUser();

    setMenuOpen(false);
  }, [location]);

  // About section
  const handleAboutClick = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");

        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("placementproUser");

    localStorage.removeItem("placementproToken");

    setUser(null);

    setMenuOpen(false);

    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}

      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        PlacementPro 🚀
      </Link>

      {/* HAMBURGER */}

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV LINKS */}

      <div className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <Link to="/">Home</Link>

        <Link to="/practice">Practice</Link>

        <Link to="/companies">Companies</Link>

        <Link to="/#about" onClick={handleAboutClick}>
          About
        </Link>

        {/* NOT LOGGED IN */}

        {!user && (
          <>
            <Link to="/login" className="btn login-btn">
              Login
            </Link>

            <Link to="/signup" className="btn signup-btn">
              Sign Up
            </Link>
          </>
        )}

        {/* LOGGED IN */}

        {user && (
          <>
            <span className="nav-user">👤 {user.name}</span>

            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

// ==========================================
// APP
// ==========================================

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* AUTH */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* PRACTICE */}

        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/dsa"
          element={
            <ProtectedRoute>
              <DSA />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/dsa/:topic"
          element={
            <ProtectedRoute>
              <DSATopic />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/dsa/:topic/:id"
          element={
            <ProtectedRoute>
              <Question />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/aptitude"
          element={
            <ProtectedRoute>
              <Aptitude />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice/aptitude"
          element={
            <ProtectedRoute>
              <Aptitude />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/aptitude/questions"
          element={
            <ProtectedRoute>
              <AptitudeQuestions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/mock-tests"
          element={
            <ProtectedRoute>
              <MockTests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice/mock-tests/result"
          element={
            <ProtectedRoute>
              <MockTestResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice/mock-tests/:testId"
          element={
            <ProtectedRoute>
              <MockTestExam />
            </ProtectedRoute>
          }
        />
        {/* COMPANIES */}

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:slug"
          element={
            <ProtectedRoute>
              <CompanyDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:slug/:year"
          element={
            <ProtectedRoute>
              <CompanyPaper />
            </ProtectedRoute>
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={
            <div className="page-placeholder">
              <h1>404</h1>

              <p>Page not found.</p>

              <Link to="/" className="btn signup-btn">
                Go Home
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
