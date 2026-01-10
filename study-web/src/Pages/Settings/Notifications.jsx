import React, { useState } from "react";
import Back from "../Back";

const Notifications = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert(`✅ Notifications Saved!\nEmail: ${emailNotifs}\nSMS: ${smsNotifs}`);
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

  const toggleWrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#f9f9ff",
  };

  const toggleLabel = {
    fontWeight: "600",
    color: "#333",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #4cafef, #6a5acd)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "linear-gradient(135deg, #3b8ed8, #5a4ebf)",
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
      <Back />
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#444" }}>
          🔔 Notification Settings
        </h2>

        <form onSubmit={handleSave}>
          {/* Email Toggle */}
          <div style={toggleWrapper}>
            <span style={toggleLabel}>Email Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={emailNotifs}
                onChange={() => setEmailNotifs(!emailNotifs)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* SMS Toggle */}
          <div style={toggleWrapper}>
            <span style={toggleLabel}>SMS Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={smsNotifs}
                onChange={() => setSmsNotifs(!smsNotifs)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            💾 Save Notifications
          </button>
        </form>
      </div>

      {/* Toggle Switch CSS */}
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.4s;
            border-radius: 34px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
          }

          input:checked + .slider {
            background-color: #6a5acd;
          }

          input:checked + .slider:before {
            transform: translateX(24px);
          }
        `}
      </style>
    </div>
  );
};

export default Notifications;

// import React from "react";

// const Notifications = () => {
//   return (
//     <div>
//       <h2>🔔 Notification Settings</h2>
//       <p>Control email, SMS, and in-app notification preferences.</p>
//     </div>
//   );
// };

// export default Notifications;
