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
        background: "linear-gradient(to right, #fff9c4, #fff176)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#fbc02d", marginBottom: "20px" }}>📜 JavaScript Essentials</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            JavaScript makes websites interactive. It manipulates HTML, CSS, and
            communicates with servers.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Variables, functions, and scope</li>
            <li style={listItem}>✅ DOM manipulation and events</li>
            <li style={listItem}>✅ ES6+ features like promises and async/await</li>
            <li style={listItem}>✅ Basics of APIs and AJAX</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
