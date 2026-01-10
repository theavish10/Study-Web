import React from "react";
import Back from "../Back";

const Sql = () => {
  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const listItem = {
    marginBottom: "10px",
    lineHeight: "1.6",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f1f8e9, #dcedc8)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ color: "#558b2f", marginBottom: "20px", fontSize: "28px" }}>
            🗄️ SQL Tutorials
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            SQL (Structured Query Language) is used to interact with relational databases.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Creating and managing tables</li>
            <li style={listItem}>✅ INSERT, UPDATE, DELETE, SELECT</li>
            <li style={listItem}>✅ Joins and relationships</li>
            <li style={listItem}>✅ Indexes, constraints, and optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sql;
