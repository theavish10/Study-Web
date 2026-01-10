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
        background: "linear-gradient(to right, #fff4e6, #ffe6e6)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#d35400", marginBottom: "20px" }}>☕ Java Programming</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            Java is a versatile, object-oriented, and platform-independent language. It is widely used for web applications, Android development, and enterprise solutions.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Understand Java syntax and JVM</li>
            <li style={listItem}>✅ Learn classes, objects, and interfaces</li>
            <li style={listItem}>✅ Explore exception handling and multithreading</li>
            <li style={listItem}>✅ Build desktop, web, or Android applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Java;


