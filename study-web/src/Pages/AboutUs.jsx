import React from "react";
import Back from "./Back";

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f4f6fb, #e0f7fa)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <Back />
        <h2 style={{ textAlign: "center", color: "#6a5acd", marginBottom: "30px" }}>
          📝 About Us
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
          Welcome to our coding community! We are passionate developers and learners who believe that coding should be simple, fun, and accessible to everyone. Our mission is to provide <strong>easy-to-understand tutorials</strong>, <strong>practical projects</strong>, and real-world coding tips that help beginners and professionals alike improve their skills.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
          Whether you’re just starting your journey in programming or looking to sharpen your expertise, this platform is here to guide you every step of the way. We cover everything from basic coding concepts to advanced problem-solving techniques, along with modern tools and technologies.
        </p>

        <div
          style={{
            background: "#f0f4ff",
            padding: "20px",
            borderRadius: "12px",
            fontStyle: "italic",
            color: "#333",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          At our core, we aim to inspire creativity, encourage learning by doing, and build a space where knowledge is shared freely. Together, let’s turn ideas into code and code into reality.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
