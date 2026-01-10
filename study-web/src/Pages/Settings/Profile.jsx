import React, { useState } from "react";
import Back from "../Back";

const Profile = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`✅ Profile Saved!\nName: ${name}\nDOB: ${dob}\nBio: ${bio}`);
  };

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
    border: "1px solid #6a5acd",
    boxShadow: "0 0 8px rgba(106, 90, 205, 0.3)",
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
          👤 Profile Settings
        </h2>
        <form onSubmit={handleSave}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <label style={labelStyle}>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <label style={labelStyle}>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell something about yourself"
            rows="4"
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => Object.assign(e.target.style, inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            💾 Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

// import React from "react";

// const Profile = () => {
//   return (
//     <div>
//       <h2>👤 Profile Settings</h2>
//       <p>Here you can update your profile information like name, bio, and email.</p>
//     </div>
//   );
// };

// export default Profile;
