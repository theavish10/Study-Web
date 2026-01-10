import React from "react";
import Back from "../Back";

const CProgramming = () => {
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
        background: "linear-gradient(to right, #f4f6fb, #e0f7fa)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#6a5acd", marginBottom: "20px" }}>💻 C Programming</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            C is a powerful general-purpose programming language. It is fast, portable, and widely used for system programming, operating systems, and embedded systems.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Learn basic syntax and structure</li>
            <li style={listItem}>✅ Work with variables, data types, and operators</li>
            <li style={listItem}>✅ Understand functions, arrays, and pointers</li>
            <li style={listItem}>✅ Build small console-based applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CProgramming;
