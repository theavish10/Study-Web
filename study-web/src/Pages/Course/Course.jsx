// import React from "react";
// import Back from "../Back";
// import { Link } from "react-router-dom";

// const Course = () => {
//   const courseList = [
//     { title: "C Programming", icon: "💻", path: "/courses/c", color: "linear-gradient(135deg, #6a11cb, #2575fc)" },
//     { title: "C++ Programming", icon: "🖥️", path: "/courses/cpp", color: "linear-gradient(135deg, #ff6a00, #ee0979)" },
//     { title: "Java", icon: "☕", path: "/courses/java", color: "linear-gradient(135deg, #f7971e, #ffd200)" },
//     { title: "Python", icon: "🐍", path: "/courses/python", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
//     { title: "JavaScript", icon: "📜", path: "/courses/javascript", color: "linear-gradient(135deg, #f7971e, #ff512f)" },
//     { title: "React JS", icon: "⚛️", path: "/courses/react", color: "linear-gradient(135deg, #0072ff, #00c6ff)" },
//   ];

//   return (
//     <div style={{ padding: "20px", background: "#f4f6fb", minHeight: "100vh" }}>
//       <Back />
//       <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
//         📚 Explore Courses
//       </h2>
      
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {courseList.map((course, i) => (
//           <Link
//             key={i}
//             to={course.path}
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             <div
//               style={{
//                 background: course.color,
//                 padding: "25px 20px",
//                 borderRadius: "16px",
//                 textAlign: "center",
//                 color: "#fff",
//                 fontSize: "18px",
//                 fontWeight: "500",
//                 cursor: "pointer",
//                 boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
//               }}
//             >
//               <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>
//                 {course.icon}
//               </span>
//               {course.title}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Course;


import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
// import Back from "../Back";

// Import subpages (you can add more later)
import CProgramming from "./CProgramming";
import CppProgramming from "./CppProgramming";
import Java from "./Java";
import Python from "./Python";
import JavaScript from "./JavaScript";
import ReactJS from "./ReactJS";


const Course = () => {
  const location = useLocation();

  // Sidebar menu list
  const courseMenu = [
    { title: "C Programming", path: "/courses/c" },
    { title: "C++ Programming", path: "/courses/cpp" },
    { title: "Java", path: "/courses/java" },
    { title: "Python", path: "/courses/python" },
    { title: "JavaScript", path: "/courses/javascript" },
    { title: "React JS", path: "/courses/react" },
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
        <h2 style={{ marginBottom: "20px", fontSize: "18px" }}>📚 Courses</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {courseMenu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Link
                  to={item.path}
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
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="c" element={<CProgramming />} />
          <Route path="cpp" element={<CppProgramming />} />
          <Route path="java" element={<Java />} />
          <Route path="python" element={<Python />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<ReactJS />} />
        </Routes>
      </div>
    </div>
  );
};

export default Course;
