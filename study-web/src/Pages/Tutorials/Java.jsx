import React from "react";
import Back from "../Back";

const Java = () => {
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
        background: "linear-gradient(to right, #fff3e0, #ffe0b2)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#f57c00", marginBottom: "20px" }}>☕ Core Java</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            Java is a robust, platform-independent language widely used for web, mobile,
            and enterprise applications.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ OOP principles</li>
            <li style={listItem}>✅ Exception handling</li>
            <li style={listItem}>✅ Multithreading</li>
            <li style={listItem}>✅ Java frameworks overview</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Java;
