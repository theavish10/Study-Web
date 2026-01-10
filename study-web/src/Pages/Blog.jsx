import React from "react";
import Back from "./Back";

const Blog = () => {
  const beginnerGuides = [
    "“Learn any coding language in 7 Days” Series (Python, C, JavaScript basics)",
    "Step-by-Step Guide to Debugging Code",
    "How to Set Up Your First Development Environment",
    "Top 10 Beginner Mistakes in Coding and How to Avoid Them"
  ];

  const problemSolving = [
    "Daily Coding Challenge: One Problem, Many Solutions",
    "How to Master Arrays, Strings, and Linked Lists",
    "Visualization of Sorting Algorithms (With Code + Animations)",
    "Dynamic Programming Explained Like You’re 5"
  ];

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  const sectionHeader = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#6a5acd",
  };

  const listItem = {
    marginBottom: "10px",
    lineHeight: "1.6",
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
      <Back />
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>📰 Blog</h2>

      {/* Beginner-Friendly Guides */}
      <div style={cardStyle}>
        <div style={sectionHeader}>🧑‍💻 Beginner-Friendly Guides</div>
        <ul style={{ paddingLeft: "20px", color: "#555" }}>
          {beginnerGuides.map((item, index) => (
            <li key={index} style={listItem}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Problem-Solving & DSA */}
      <div style={cardStyle}>
        <div style={sectionHeader}>🔧 Problem-Solving & DSA</div>
        <ul style={{ paddingLeft: "20px", color: "#555" }}>
          {problemSolving.map((item, index) => (
            <li key={index} style={listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
