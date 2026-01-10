import React from "react";
import Back from "../Back";

const JavaScript = () => {
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
        background: "linear-gradient(to right, #fff7e6, #fff3e0)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#f39c12", marginBottom: "20px" }}>📜 JavaScript</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            JavaScript is the language of the web. It adds interactivity, dynamic features, and power to websites and web apps.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Understand variables, functions, and scope</li>
            <li style={listItem}>✅ Work with DOM and events</li>
            <li style={listItem}>✅ Learn ES6+ features like async/await, promises, and modules</li>
            <li style={listItem}>✅ Use JavaScript with HTML & CSS for frontend development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;


