// import React from "react";
// import Back from "../Back";
// import { Link } from "react-router-dom";

// const Settings = () => {
//   // Small reusable SettingCard
//   const SettingCard = ({ title, icon, path, color }) => {
//     return (
//       <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
//         <div
//           style={{
//             background: color,
//             padding: "25px 20px",
//             borderRadius: "16px",
//             margin: "10px 0",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//             fontSize: "18px",
//             fontWeight: "500",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//             transition: "transform 0.3s, box-shadow 0.3s",
//           }}
//           onMouseOver={(e) => {
//             e.currentTarget.style.transform = "scale(1.05)";
//             e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
//           }}
//           onMouseOut={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
//           }}
//         >
//           <span style={{ fontSize: "28px" }}>{icon}</span>
//           <span>{title}</span>
//         </div>
//       </Link>
//     );
//   };

//   // List of settings with new pastel gradients
//   const settingsList = [
//     { title: "Profile", icon: "👤", path: "/settings/profile", color: "linear-gradient(135deg, #ff9a9e, #fad0c4)" },
//     { title: "Security", icon: "🔒", path: "/settings/security", color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)" },
//     { title: "Notifications", icon: "🔔", path: "/settings/notifications", color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)" },
//     { title: "Theme", icon: "🎨", path: "/settings/theme", color: "linear-gradient(135deg, #84fab0, #8fd3f4)" },
//     { title: "Privacy", icon: "🛡️", path: "/settings/privacy", color: "linear-gradient(135deg, #fccb90, #d57eeb)" },
//   ];

//   return (
//     <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
//       <Back />
//       <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>⚙️ Settings</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {settingsList.map((setting, index) => (
//           <SettingCard
//             key={index}
//             title={setting.title}
//             icon={setting.icon}
//             path={setting.path}
//             color={setting.color}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Settings;
import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
// import Back from "../Back";

// Import subpages
import Profile from "./Profile";
import Security from "./Security";
import Notifications from "./Notifications";
import Theme from "./Theme";
import Privacy from "./Privacy";

const Settings = () => {
  const location = useLocation();

  // Sidebar menu list
  const settingsList = [
    { title: "Profile", path: "/settings/profile" },
    { title: "Security", path: "/settings/security" },
    { title: "Notifications", path: "/settings/notifications" },
    { title: "Theme", path: "/settings/theme" },
    { title: "Privacy", path: "/settings/privacy" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6fb" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#fff",
          borderRight: "1px solid #ddd",
          padding: "20px",
        }}
      >
        {/* <Back /> */}
        <h2 style={{ marginBottom: "20px", fontSize: "18px" }}>⚙️ Settings</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {settingsList.map((setting, index) => {
            const isActive = location.pathname === setting.path;
            return (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Link
                  to={setting.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: isActive ? "600" : "400",
                    background: isActive ? "#e0f0ff" : "transparent",
                    color: isActive ? "#007bff" : "#333",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{setting.icon}</span>
                  {setting.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="security" element={<Security />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="theme" element={<Theme />} />
          <Route path="privacy" element={<Privacy />} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;

