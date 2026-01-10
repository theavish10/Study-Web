import React from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../Assets/img.png";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // redirect after signup
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img
          src={img}
          alt="Welcome"
          style={{ width: "180px", height: "150px", borderRadius: "50%" }}
          className="signup-image"
        />
        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started</p>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>

      <style>{`
        body, html, #root { height: 100%; margin: 0; }
        .signup-container {
          height: 100vh;
          display: flex; justify-content: center; align-items: center;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          font-family: 'Segoe UI', sans-serif;
        }
        .signup-box {
          background: #fefdfcff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          text-align: center;
          width: 350px;
        }
        .signup-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-bottom: 20px;
          border-radius: 50%;
        }
        .signup-box h2 { margin-bottom: 10px; font-size: 28px; color: #2575fc; }
        .subtitle { margin-bottom: 20px; font-size: 14px; color: #555; }
        .signup-box input {
          width: 100%; padding: 12px; margin: 10px 0;
          border: 1px solid #ccc; border-radius: 8px;
        }
        .signup-box button {
          width: 100%; padding: 12px; background: #2575fc;
          color: #fff; border: none; border-radius: 8px;
          font-size: 16px; cursor: pointer;
        }
        .signup-box button:hover { background: #1a5fd0; }
        .signup-box p { margin-top: 15px; font-size: 14px; }
        .signup-box a { color: #2575fc; text-decoration: none; }
      `}</style>
    </div>
  );
};

export default Signup;
