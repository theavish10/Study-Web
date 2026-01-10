import React, { useState } from "react";
import Back from "../Back";

const Privacy = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [shareData, setShareData] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert(`✅ Privacy Saved!\nShow Profile: ${showProfile}\nShare Data: ${shareData}`);
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
    background: "linear-gradient(135deg, #28a745, #48c774)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "linear-gradient(135deg, #218838, #34b35e)",
  };

  return (
    <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
      <Back />
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#444" }}>
          🛡️ Privacy Settings
        </h2>

        <form onSubmit={handleSave}>
          {/* Show Profile Toggle */}
          <div style={toggleWrapper}>
            <span style={toggleLabel}>Show my profile publicly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={showProfile}
                onChange={() => setShowProfile(!showProfile)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Share Data Toggle */}
          <div style={toggleWrapper}>
            <span style={toggleLabel}>Allow sharing data with partners</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={shareData}
                onChange={() => setShareData(!shareData)}
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
            💾 Save Privacy
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
            background-color: #28a745;
          }

          input:checked + .slider:before {
            transform: translateX(24px);
          }
        `}
      </style>
    </div>
  );
};

export default Privacy;

// import React from "react";

// const Privacy = () => {
//   return (
//     <div>
//       <h2>🔒 Privacy Settings</h2>
//       <p>Manage who can see your profile, posts, and activity.</p>
//     </div>
//   );
// };

// export default Privacy;

