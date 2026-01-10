import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8f9fa, #e0f7fa)",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>
          Welcome to <span style={{ color: "#6a5acd" }}>Study Web</span> 🚀
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }}>
          Here, coding is not just about writing lines of code, it’s about 
          <strong> creating solutions</strong>, <strong>building ideas</strong>, 
          and <strong>shaping the future</strong>.<br /><br />
          From beginner-friendly tutorials to advanced projects, we bring you 
          <strong> simple, practical, and engaging content</strong> that makes learning programming 
          fun and effective. Whether you want to master a new language, practice 
          problem-solving, or explore the latest tech trends – we’ve got you covered.<br /><br />
          ✨ <strong>Start your coding journey today</strong> and turn your imagination into innovation!
        </p>

        <button
          onClick={() => navigate("/courses")}
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "600",
            background: "linear-gradient(135deg, #6a5acd, #836fff)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #5a4ebf, #705edc)"}
          onMouseOut={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #6a5acd, #836fff)"}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

