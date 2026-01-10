import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: "#1e293b",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "6px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      ⬅ Back
    </button>
  );
};

export default Back;
