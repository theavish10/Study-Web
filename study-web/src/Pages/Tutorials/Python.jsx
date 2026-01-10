import React from "react";
import Back from "../Back";

const Python = () => {
  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  const listItem = {
    marginBottom: "10px",
    lineHeight: "1.6",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f2f1, #b2dfdb)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#00796b", marginBottom: "20px" }}>🐍 Python Programming</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            Python is a versatile, beginner-friendly language used in data science,
            web development, and automation.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Basic syntax and data types</li>
            <li style={listItem}>✅ Control structures and functions</li>
            <li style={listItem}>✅ OOP concepts in Python</li>
            <li style={listItem}>✅ Libraries for AI & ML</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Python;
