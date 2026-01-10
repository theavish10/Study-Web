import React, { useState } from "react";
import Back from "../Back";

const Security = () => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`✅ Security Updated!\nEmail: ${email}\nPassword Changed`);
  };

  // Common Styles
  const containerStyle = {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "25px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "0.3s",
  };

  const inputFocus = {
    border: "1px solid #ff6b6b",
    boxShadow: "0 0 8px rgba(255, 107, 107, 0.4)",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#333",
    display: "block",
    marginBottom: "5px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "linear-gradient(135deg, #e65c5c, #ff6b6b)",
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
      <Back />
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#444" }}>
          🔒 Security Settings
        </h2>
        <form onSubmit={handleSave}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <label style={labelStyle}>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <label style={labelStyle}>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            🔐 Update Security
          </button>
        </form>
      </div>
    </div>
  );
};

export default Security;


// import React from "react";

// const Security = () => (
//   <div>
//     <h2>🔒 Security Settings</h2>
//     <p>Manage password, 2FA, and login activity.</p>
//   </div>
// );

// export default Security;
