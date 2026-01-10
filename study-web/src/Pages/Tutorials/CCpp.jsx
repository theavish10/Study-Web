import React from "react";
import Back from "../Back";

const CCpp = () => {
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
        background: "linear-gradient(to right, #f0f8ff, #e6f7ff)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#1e90ff", marginBottom: "20px" }}>💻 C & C++ Language</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            C is a low-level, fast programming language, while C++ extends it with object-oriented features.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ C basics: variables, loops, functions</li>
            <li style={listItem}>✅ Pointers and memory management</li>
            <li style={listItem}>✅ C++ classes, objects, inheritance</li>
            <li style={listItem}>✅ Competitive programming concepts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CCpp;
