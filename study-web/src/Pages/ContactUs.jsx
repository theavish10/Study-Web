import React from "react";
import Back from "./Back";
import { FaInstagram, FaGoogle } from "react-icons/fa";

const ContactUs = () => {
  const sectionStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    maxWidth: "700px",
    width: "100%",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "18px",
    marginBottom: "15px",
    color: "#333",
  };

  const socialButton = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
  };

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
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <Back />

        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#6a5acd" }}>
          📞 Contact Us
        </h2>

        {/* Contact Info Section */}
        <div style={sectionStyle}>
          <div style={itemStyle}>
            📧 Email:{" "}
            <a href="mailto:avishsaluja4@gmail.com" style={{ color: "#6a5acd", textDecoration: "underline" }}>
              avishsaluja4@gmail.com
            </a>
          </div>
          <div style={itemStyle}>
            📱 Phone:{" "}
            <a href="tel:+917033259997" style={{ color: "#6a5acd", textDecoration: "underline" }}>
              +91-70332 59997
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div style={sectionStyle}>
          <h3 style={{ marginBottom: "20px", color: "#6a5acd" }}>Follow Me</h3>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="https://www.instagram.com/the___avish/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialButton,
                background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaInstagram size={20} /> Instagram
            </a>

            <a
              href="https://www.google.com/search?q=avishsaluja4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialButton,
                background: "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaGoogle size={20} /> Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

