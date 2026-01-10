import React from "react";
import Back from "../Back";

const ReactJS = () => {
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
        background: "linear-gradient(to right, #e0f7ff, #e6f0ff)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#3498db", marginBottom: "20px" }}>⚛️ React JS</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            React is a popular JavaScript library for building modern, component-based user interfaces.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Learn JSX and component structure</li>
            <li style={listItem}>✅ Work with props and state</li>
            <li style={listItem}>✅ Understand hooks (useState, useEffect, etc.)</li>
            <li style={listItem}>✅ Build dynamic and responsive single-page applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReactJS;


