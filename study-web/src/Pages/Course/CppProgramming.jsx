import React from "react";
import Back from "../Back";

const CppProgramming = () => {
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
        background: "linear-gradient(to right, #e8f0fe, #f1f9f8)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#0077b6", marginBottom: "20px" }}>🖥️ C++ Programming</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            C++ is an extension of C that supports Object-Oriented Programming (OOP). It is widely used in game development, operating systems, and performance-heavy applications.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Learn classes and objects</li>
            <li style={listItem}>✅ Master constructors, destructors, and inheritance</li>
            <li style={listItem}>✅ Understand polymorphism and encapsulation</li>
            <li style={listItem}>✅ Work on real-world projects with OOP concepts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CppProgramming;
