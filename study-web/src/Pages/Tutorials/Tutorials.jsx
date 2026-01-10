// import React from "react";
// import Back from "../Back";
// import { Link } from "react-router-dom";

// // TutorialCard component
// const TutorialCard = ({ id, title, icon, color }) => {
//   return (
//     <Link
//       to={`/tutorials/${id}`}
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//       <div
//         style={{
//           background: color,
//           padding: "25px 20px",
//           borderRadius: "16px",
//           margin: "10px 0",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "16px",
//           cursor: "pointer",
//           color: "#fff",
//           fontWeight: "500",
//           textAlign: "center",
//           boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//           transition: "transform 0.3s, box-shadow 0.3s",
//         }}
//         onMouseOver={(e) => {
//           e.currentTarget.style.transform = "scale(1.05)";
//           e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
//         }}
//       >
//         <span style={{ fontSize: "40px", marginBottom: "10px" }}>{icon}</span>
//         {title}
//       </div>
//     </Link>
//   );
// };

// const Tutorials = () => {
//   // Array of tutorials with gradient colors
//   const tutorialList = [
//     { id: "html", title: "HTML Basics", icon: "🌐", color: "linear-gradient(135deg, #6a11cb, #2575fc)" },
//     { id: "css", title: "CSS Styling", icon: "🎨", color: "linear-gradient(135deg, #ff6a00, #ee0979)" },
//     { id: "javascript", title: "JavaScript Essentials", icon: "📜", color: "linear-gradient(135deg, #f7971e, #ffd200)" },
//     { id: "react", title: "React.js for Beginners", icon: "⚛️", color: "linear-gradient(135deg, #0072ff, #00c6ff)" },
//     { id: "python", title: "Python Programming", icon: "🐍", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
//     { id: "c_cpp", title: "C & C++ Language", icon: "💻", color: "linear-gradient(135deg, #ff512f, #dd2476)" },
//     { id: "java", title: "Core Java", icon: "☕", color: "linear-gradient(135deg, #f7971e, #ffd200)" },
//     { id: "dsa", title: "Data Structures & Algorithms (DSA)", icon: "📊", color: "linear-gradient(135deg, #6a11cb, #2575fc)" },
//     { id: "sql", title: "Database (SQL) Tutorials", icon: "🗄️", color: "linear-gradient(135deg, #ff6a00, #ee0979)" },
//     { id: "git", title: "Git & GitHub Guide", icon: "🐙", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
//   ];

//   return (
//     <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
//       <Back />
//       <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>📘 Tutorials</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {tutorialList.map((tutorial) => (
//           <TutorialCard
//             key={tutorial.id}
//             id={tutorial.id}
//             title={tutorial.title}
//             icon={tutorial.icon}
//             color={tutorial.color}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tutorials;

import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
// import Back from "../Back";

// Import dummy tutorial subpages
// Import subpages (tutorial topic pages)
import Html from "./Html";
import Css from "./Css";
import JavaScript from "./JavaScript";
import ReactJS from "./ReactJs";
import Python from "./Python";
import CCpp from "./CCpp";
import Java from "./Java";
import Dsa from "./Dsa";
import Sql from "./Sql";
import Git from "./Git";


const Tutorials = () => {
  const location = useLocation();

  // Sidebar menu list
  const tutorialList = [
    { id: "html", title: "HTML Basics", path: "/tutorials/html" },
    { id: "css", title: "CSS Styling", path: "/tutorials/css" },
    { id: "javascript", title: "JavaScript Essentials", path: "/tutorials/javascript" },
    { id: "react", title: "React.js for Beginners", path: "/tutorials/reactjs" },
    { id: "python", title: "Python Programming", path: "/tutorials/python" },
    { id: "ccpp", title: "C & C++ Language", path: "/tutorials/ccpp" },
    { id: "java", title: "Core Java", path: "/tutorials/java" },
    { id: "dsa", title: "Data Structures & Algorithms (DSA)", path: "/tutorials/dsa" },
    { id: "sql", title: "Database (SQL) Tutorials", path: "/tutorials/sql" },
    { id: "git", title: "Git & GitHub Guide", path: "/tutorials/git" },
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
        <h2 style={{ marginBottom: "20px", fontSize: "18px" }}>📘 Tutorials</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tutorialList.map((tutorial, index) => {
            const isActive = location.pathname === tutorial.path;
            return (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Link
                  to={tutorial.path}
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
                  <span style={{ fontSize: "20px" }}>{tutorial.icon}</span>
                  {tutorial.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<ReactJS />} />
          <Route path="python" element={<Python />} />
          <Route path="ccpp" element={<CCpp />} />
          <Route path="java" element={<Java />} />
          <Route path="dsa" element={<Dsa />} />
          <Route path="sql" element={<Sql />} />
          <Route path="git" element={<Git />} />
        </Routes>
      </div>
    </div>
  );
};

export default Tutorials;
