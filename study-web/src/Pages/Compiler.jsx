import Back from "./Back";
import React, { useState } from "react";

const Compiler = () => {
  const [code, setCode] = useState("// Write your code here...");

  const containerStyle = {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "25px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const editorStyle = {
    width: "100%",
    height: "350px",
    background: "#1e1e1e",
    color: "#d4d4d4",
    fontFamily: "Consolas, 'Courier New', monospace",
    fontSize: "14px",
    borderRadius: "12px",
    padding: "15px",
    border: "none",
    outline: "none",
    resize: "none",
    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4)",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "12px 20px",
    background: "linear-gradient(135deg, #6a5acd, #836fff)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "linear-gradient(135deg, #5a4ebf, #705edc)",
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
      <Back />
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#444" }}>
          💻 Online Compiler
        </h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={editorStyle}
        />
        <button
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHover)}
          onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          ▶️ Run Code (coming soon)
        </button>
      </div>
    </div>
  );
};

export default Compiler;

