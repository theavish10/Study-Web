import React from "react";
import Back from "../Back";

const Git = () => {
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
        background: "linear-gradient(to right, #e8eaf6, #d1c4e9)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#5e35b1", marginBottom: "20px" }}>🐙 Git & GitHub Guide</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            Git is a version control system; GitHub hosts repositories for collaboration.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Initialize and clone repositories</li>
            <li style={listItem}>✅ Commit and push changes</li>
            <li style={listItem}>✅ Branching and merging</li>
            <li style={listItem}>✅ Collaborating with pull request</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Git;
