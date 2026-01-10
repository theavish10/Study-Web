import React, { useState } from "react";
import Back from "../Back";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`✅ Theme Saved: ${theme}`);
  };

  // Styles
  const containerStyle = {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "25px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const optionCard = (selected) => ({
    padding: "15px",
    borderRadius: "12px",
    border: selected ? "2px solid #6a5acd" : "2px solid #ddd",
    background: selected ? "rgba(106,90,205,0.1)" : "#f9f9ff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    transition: "0.3s",
  });

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #6a5acd, #836fff)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
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
          🎨 Theme Settings
        </h2>

        <form onSubmit={handleSave}>
          {/* Light Mode */}
          <div
            style={optionCard(theme === "light")}
            onClick={() => setTheme("light")}
          >
            <input
              type="radio"
              value="light"
              checked={theme === "light"}
              onChange={(e) => setTheme(e.target.value)}
              style={{ marginRight: "12px" }}
            />
            🌞 Light Mode
          </div>

          {/* Dark Mode */}
          <div
            style={optionCard(theme === "dark")}
            onClick={() => setTheme("dark")}
          >
            <input
              type="radio"
              value="dark"
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.target.value)}
              style={{ marginRight: "12px" }}
            />
            🌙 Dark Mode
          </div>

          {/* System Default */}
          <div
            style={optionCard(theme === "system")}
            onClick={() => setTheme("system")}
          >
            <input
              type="radio"
              value="system"
              checked={theme === "system"}
              onChange={(e) => setTheme(e.target.value)}
              style={{ marginRight: "12px" }}
            />
            💻 System Default
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            🎉 Apply Theme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Theme;

// import React from "react";

// const Theme = () => (
//   <div>
//     <h2>🎨 Theme Settings</h2>
//     <p>Choose between light, dark, or custom themes for your dashboard.</p>
//   </div>
// );

// export default Theme;

