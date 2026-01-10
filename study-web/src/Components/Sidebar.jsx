// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <aside className="sidebar">
// //       <h2 className="logo">📚 Study Web</h2>
// //       <ul>
// //         <li><Link to="/dashboard">🏠 Dashboard</Link></li>
// //         <li><Link to="/courses">📖 Courses</Link></li>
// //         <li><Link to="/tutorials">📘 Tutorials</Link></li>
// //         <li><Link to="/compiler">💻 Compiler</Link></li>
// //         <li><Link to="/settings">⚙ Settings</Link></li>
// //         <li><Link to="/">🚪 Logout</Link></li>
// //       </ul>

// //       <style>{`
// //         .sidebar {
// //           width: 160px;              /* 👈 pehle 220px tha, ab thoda chhota */
// //           background: #1e293b;
// //           color: white;
// //           height: 100vh;
// //           padding: 15px;
// //           position: fixed;
// //           top: 60px; /* navbar ke neeche se start */
// //           left: 0;
// //         }
// //         .logo {
// //           margin-bottom: 20px;
// //           text-align: center;
// //           font-size: 18px;
// //         }
// //         .sidebar ul {
// //           list-style: none;
// //           padding: 0;
// //         }
// //         .sidebar li {
// //           margin: 15px 0;
// //         }
// //         .sidebar a {
// //           color: #e2e6eaff;
// //           text-decoration: none;
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;           /* 👈 icon aur text ke beech gap */
// //           padding: 8px 10px;
// //           border-radius: 6px;
// //           font-size: 15px;
// //         }
// //         .sidebar a:hover {
// //           background: #324054ff;
// //         }
// //       `}</style>
// //     </aside>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false); // 👈 sidebar toggle state

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {/* Toggle Button */}
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {collapsed ? "➡️" : "⬅️"}
//       </button>

//       {/* Logo */}
//       <h2 className="logo">{collapsed ? "📚" : "📚 Study Web"}</h2>

//       {/* Menu */}
//       <ul>
//         <li><Link to="/dashboard">🏠 {!collapsed && "Dashboard"}</Link></li>
//         <li><Link to="/courses">📖 {!collapsed && "Courses"}</Link></li>
//         <li><Link to="/tutorials">📘 {!collapsed && "Tutorials"}</Link></li>
//         <li><Link to="/compiler">💻 {!collapsed && "Compiler"}</Link></li>
//         <li><Link to="/settings">⚙ {!collapsed && "Settings"}</Link></li>
//         <li><Link to="/">🚪 {!collapsed && "Logout"}</Link></li>
//       </ul>

//       <style>{`
//         .sidebar {
//           width: 180px;
//           background: #1e293b;
//           color: white;
//           height: 100vh;
//           padding: 15px;
//           position: fixed;
//           top: 60px;
//           left: 0;
//           transition: width 0.3s ease;
//           overflow: hidden;
//         }
//         .sidebar.collapsed {
//           width: 70px; /* 👈 sirf icon ke liye chhota */
//         }
//         .logo {
//           margin-bottom: 20px;
//           text-align: center;
//           font-size: 18px;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .sidebar ul {
//           list-style: none;
//           padding: 0;
//         }
//         .sidebar li {
//           margin: 15px 0;
//         }
//         .sidebar a {
//           color: #e2e6eaff;
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 10px;
//           border-radius: 6px;
//           font-size: 15px;
//           white-space: nowrap;
//         }
//         .sidebar a:hover {
//           background: #324054ff;
//         }
//         .toggle-btn {
//           background: transparent;
//           border: none;
//           color: white;
//           font-size: 18px;
//           cursor: pointer;
//           margin-bottom: 15px;
//           display: block;
//           margin-left: auto;
//           margin-right: auto;
//         }
//       `}</style>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   // Base64 SVG icons
//   const rightArrow =
//   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzLWljb24gbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzIj48cGF0aCBkPSJNMTYgNUgzIi8+PHBhdGggZD0iTTE2IDEySDMiLz48cGF0aCBkPSJNMTYgMTlIMyIvPjxwYXRoIGQ9Ik0yMSA1aC4wMSIvPjxwYXRoIGQ9Ik0yMSAxMmguMDEiLz48cGF0aCBkPSJNMjEgMTloLjAxIi8+PC9zdmc+"
//     // "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtaWNvbiBsdWNpZGUtY2hldnJvbi1yaWdodCI+PHBhdGggZD0ibTkgMTggNi02LTYtNiIvPjwvc3ZnPg==";

//   const leftArrow =
//   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzLWljb24gbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzIj48cGF0aCBkPSJNMTYgNUgzIi8+PHBhdGggZD0iTTE2IDEySDMiLz48cGF0aCBkPSJNMTYgMTlIMyIvPjxwYXRoIGQ9Ik0yMSA1aC4wMSIvPjxwYXRoIGQ9Ik0yMSAxMmguMDEiLz48cGF0aCBkPSJNMjEgMTloLjAxIi8+PC9zdmc+"
//   // "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tbGVmdC1pY29uIGx1Y2lkZS1jaGV2cm9uLWxlZnQiPjxwYXRoIGQ9Im0xNSAxOC02LTYgNi02Ii8+PC9zdmc+";

//   return (
//     <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {/* Toggle Button */}
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         <img
//           src={collapsed ? rightArrow : leftArrow}
//           alt="toggle"
//           width="20"
//           height="20"
//         />
//       </button>

//       {/* Logo */}
//       <h2 className="logo">{collapsed ? "📚" : "📚 Study Web"}</h2>

//       {/* Menu */}
//       <ul>
//       <li>
//         <Link to="/dashboard">
//           <img 
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTZhMiAyIDAgMCAxIDIuNTgyIDBsNyA2QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg==" 
//             alt="Dashboard" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Dashboard"}
//         </Link>
//       </li>

//       <li>
//         <Link to="/courses">
//           <img
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi1pY29uIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg==" 
//             alt="Courses" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Courses"}
//         </Link>
//       </li>

//       <li>
//         <Link to="/tutorials">
//           <img
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2staWNvbiBsdWNpZGUtYm9vayI+PHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgxOWExIDEgMCAwIDEgMSAxdjE4YTEgMSAwIDAgMS0xIDFINi41YTEgMSAwIDAgMSAwLTVIMjAiLz48L3N2Zz4=" 
//             alt="Tutorials" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Tutorials"}
//         </Link>
//       </li>

//       <li>
//         <Link to="/compiler">
//           <img 
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhcHRvcC1pY29uIGx1Y2lkZS1sYXB0b3AiPjxwYXRoIGQ9Ik0xOCA1YTIgMiAwIDAgMSAyIDJ2OC41MjZhMiAyIDAgMCAwIC4yMTIuODk3bDEuMDY4IDIuMTI3YTEgMSAwIDAgMS0uOSAxLjQ1SDMuNjJhMSAxIDAgMCAxLS45LTEuNDVsMS4wNjgtMi4xMjdBMiAyIDAgMCAwIDQgMTUuNTI2VjdhMiAyIDAgMCAxIDItMnoiLz48cGF0aCBkPSJNMjAuMDU0IDE1Ljk4N0gzLjk0NiIvPjwvc3ZnPg==" 
//             alt="Compiler" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Compiler"}
//         </Link>
//       </li>

//       <li>
//         <Link to="/settings">
//           <img
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzLWljb24gbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+" 
//             alt="Settings" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Settings"}
//         </Link>
//       </li>

//       <li>
//         <Link to="/logout">
//           <img
//             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvZy1vdXQtaWNvbiBsdWNpZGUtbG9nLW91dCI+PHBhdGggZD0ibTE2IDE3IDUtNS01LTUiLz48cGF0aCBkPSJNMjEgMTJIOSIvPjxwYXRoIGQ9Ik05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNCIvPjwvc3ZnPg==" 
//             alt="Logout" 
//             width="20" 
//             height="20" 
//             style={{ marginRight: "8px", verticalAlign: "middle" }}
//           />
//           {!collapsed && "Logout"}
//         </Link>
//       </li>

//       </ul>

//       <style>{`
//         .sidebar {
//           width: 180px;
//           background: #1e293b;
//           color: white;
//           height: 100vh;
//           padding: 15px;
//           position: fixed;
//           top: 60px;
//           left: 0;
//           transition: width 0.3s ease;
//           overflow: hidden;
//         }
//         .sidebar.collapsed {
//           width: 70px;
//         }
//         .logo {
//           margin-bottom: 20px;
//           text-align: center;
//           font-size: 18px;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .sidebar ul {
//           list-style: none;
//           padding: 0;
//         }
//         .sidebar li {
//           margin: 15px 0;
//         }
//         .sidebar a {
//           color: #e2e6eaff;
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 10px;
//           border-radius: 6px;
//           font-size: 15px;
//           white-space: nowrap;
//         }
//         .sidebar a:hover {
//           background: #324054ff;
//         }
//         .toggle-btn {
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           margin-bottom: 15px;
//           display: block;
//           margin-left: auto;
//           margin-right: auto;
//         }
//         .toggle-btn img {
//           filter: invert(1); /* 👈 icon ko white banane ke liye */
//         }
//       `}</style>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Base64 SVG icons
  const rightArrow =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVsbGlwc2lzLXZlcnRpY2FsLWljb24gbHVjaWRlLWVsbGlwc2lzLXZlcnRpY2FsIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxOSIgcj0iMSIvPjwvc3ZnPg==";

  const leftArrow =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzLWljb24gbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzIj48cGF0aCBkPSJNMTYgNUgzIi8+PHBhdGggZD0iTTE2IDEySDMiLz48cGF0aCBkPSJNMTYgMTlIMyIvPjxwYXRoIGQ9Ik0yMSA1aC4wMSIvPjxwYXRoIGQ9Ik0yMSAxMmguMDEiLz48cGF0aCBkPSJNMjEgMTloLjAxIi8+PC9zdmc+";

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo + Toggle Button ek line me */}
      <div className="logo-container">
        <h2 className="logo">{collapsed ? "📚" : "📚 Study Web"}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <img
            src={collapsed ? rightArrow : leftArrow}
            alt="toggle"
            width="20"
            height="20"
          />
        </button>
      </div>

      {/* Menu */}
      <ul>
        <li>
          <Link to="/dashboard">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTZhMiAyIDAgMCAxIDIuNTgyIDBsNyA2QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg=="
              alt="Dashboard"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Dashboard"}
          </Link>
        </li>

        <li>
          <Link to="/courses">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi1pY29uIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg=="
              alt="Courses"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Courses"}
          </Link>
        </li>

        <li>
          <Link to="/tutorials">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2staWNvbiBsdWNpZGUtYm9vayI+PHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgxOWExIDEgMCAwIDEgMSAxdjE4YTEgMSAwIDAgMS0xIDFINi41YTEgMSAwIDAgMSAwLTVIMjAiLz48L3N2Zz4="
              alt="Tutorials"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Tutorials"}
          </Link>
        </li>

        <li>
          <Link to="/compiler">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhcHRvcC1pY29uIGx1Y2lkZS1sYXB0b3AiPjxwYXRoIGQ9Ik0xOCA1YTIgMiAwIDAgMSAyIDJ2OC41MjZhMiAyIDAgMCAwIC4yMTIuODk3bDEuMDY4IDIuMTI3YTEgMSAwIDAgMS0uOSAxLjQ1SDMuNjJhMSAxIDAgMCAxLS45LTEuNDVsMS4wNjgtMi4xMjdBMiAyIDAgMCAwIDQgMTUuNTI2VjdhMiAyIDAgMCAxIDItMnoiLz48cGF0aCBkPSJNMjAuMDU0IDE1Ljk4N0gzLjk0NiIvPjwvc3ZnPg=="
              alt="Compiler"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Compiler"}
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzLWljb24gbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+"
              alt="Settings"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Settings"}
          </Link>
        </li>

        <li>
          <Link to="/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvZy1vdXQtaWNvbiBsdWNpZGUtbG9nLW91dCI+PHBhdGggZD0ibTE2IDE3IDUtNS01LTUiLz48cGF0aCBkPSJNMjEgMTJIOSIvPjxwYXRoIGQ9Ik05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNCIvPjwvc3ZnPg=="
              alt="Logout"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            {!collapsed && "Logout"}
          </Link>
        </li>
      </ul>

      <style>{`
        .sidebar {
          width: 180px;
          background: #1e293b;
          color: white;
          height: 100vh;
          padding: 15px;
          position: fixed;
          top: 60px;
          left: 0;
          transition: width 0.3s ease;
          overflow: hidden;
        }
        .sidebar.collapsed {
          width: 70px;
        }
        .logo-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .logo {
          font-size: 18px;
          white-space: nowrap;
          overflow: hidden;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar li {
          margin: 15px 0;
        }
        .sidebar a {
          color: #e2e6ea;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 6px;
          font-size: 15px;
          white-space: nowrap;
        }
        .sidebar a:hover {
          background: #324054;
        }
        .toggle-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          margin: 0;
        }
        .toggle-btn img {
          filter: invert(1); /* 👈 icon ko white banane ke liye */
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;



