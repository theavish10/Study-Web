import React from "react";
import Back from "../Back";

const Html = () => {
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
        background: "linear-gradient(to right, #ffe0b2, #ffcc80)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#e65100", marginBottom: "20px" }}>🌐 HTML Basics</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            HTML (HyperText Markup Language) defines the structure of web pages using tags
            like headings, paragraphs, links, images, and more.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Learn HTML elements and attributes</li>
            <li style={listItem}>✅ Understand semantic tags</li>
            <li style={listItem}>✅ Embed images, videos, and links</li>
            <li style={listItem}>✅ Build a simple webpage structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Html;
