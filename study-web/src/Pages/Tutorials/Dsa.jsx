import React from "react";
import Back from "../Back";

const Dsa = () => {
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
        background: "linear-gradient(to right, #e0f2f1, #e8f5e9)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Back />
        <div style={cardStyle}>
          <h2 style={{ color: "#00796b", marginBottom: "20px" }}>📊 Data Structures & Algorithms (DSA)</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            DSA is about efficient data storage and problem-solving techniques.
          </p>

          <h3 style={{ marginBottom: "15px", color: "#333" }}>What you will learn:</h3>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            <li style={listItem}>✅ Arrays, linked lists, stacks, queues</li>
            <li style={listItem}>✅ Sorting and searching algorithms</li>
            <li style={listItem}>✅ Trees and graphs</li>
            <li style={listItem}>✅ Complexity analysis (Big-O)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dsa;
