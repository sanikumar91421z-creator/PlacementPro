import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        setMessage(
          data.message || "Login failed"
        );

        return;
      }


      // Save logged-in user temporarily
      // Save logged-in user
      localStorage.setItem(
       "placementproUser",
       JSON.stringify(data.user)
      );

      // Save JWT token
      localStorage.setItem(
       "placementproToken",
        data.token
      );


      setMessage("Login successful!");


      // Redirect after login
      setTimeout(() => {
        navigate("/");
      }, 800);


    } catch (error) {

      console.error(
        "Login error:",
        error
      );

      setMessage(
        "Unable to connect to server"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <h1>Welcome Back</h1>

          <p>
            Login to continue your placement
            preparation.
          </p>

        </div>


        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          {/* NAME */}

          <div className="form-group">

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>


          {/* MESSAGE */}

          {message && (
            <p className="auth-message">
              {message}
            </p>
          )}


          {/* LOGIN */}

          <button
            type="submit"
            className="btn primary-btn auth-btn"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>


        <div className="auth-footer">

          <p>
            Don't have an account?{" "}

            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;