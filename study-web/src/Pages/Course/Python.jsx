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
        background: "linear-gradient(to right, #e0f7fa, #e0ffe0)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#4caf50", marginBottom: "20px" }}>🐍 Python Programming</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            Python is a high-level, easy-to-learn programming language known for its simplicity. It is widely used in AI, Data Science, Web Development, and Automation.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Learn basic syntax and dynamic typing</li>
            <li style={listItem}>✅ Work with lists, dictionaries, and sets</li>
            <li style={listItem}>✅ Explore object-oriented programming in Python</li>
            <li style={listItem}>✅ Hands-on with AI, ML, and data analysis libraries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Python;
