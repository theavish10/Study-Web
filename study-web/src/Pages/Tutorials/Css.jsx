import React from "react";
import Back from "../Back";

const Css = () => {
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
        background: "linear-gradient(to right, #f3e5f5, #e1bee7)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#6a1b9a", marginBottom: "20px" }}>🎨 CSS Styling</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            CSS (Cascading Style Sheets) styles HTML pages by controlling colors, fonts, spacing, and layouts.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Selectors, properties, and values</li>
            <li style={listItem}>✅ Box model and positioning</li>
            <li style={listItem}>✅ Flexbox and Grid layout</li>
            <li style={listItem}>✅ Responsive design with media queries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Css;
