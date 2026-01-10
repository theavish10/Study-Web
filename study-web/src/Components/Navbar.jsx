// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">📚 Study Web</div>
//       <ul className="nav-links">
//         <li><Link to="/dashboard">Home</Link></li>
//         <li><Link to="/blog">Blog</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//       </ul>

//       <style>{`
//         .navbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 15px 30px;
//           background: #1e293b;
//           color: white;
//           width: 100%;
//           position: fixed;   /* 👈 navbar ko fix kar diya */
//           top: 0;
//           left: 0;
//           z-index: 1000;     /* sidebar ke upar rahega */
//         }
//         .logo {
//           font-size: 20px;
//           font-weight: bold;
//         }
//         .nav-links {
//           list-style: none;
//           display: flex;
//           gap: 20px;
//           margin: 0;
//           padding: 0;
//         }
//         .nav-links li {
//           display: inline;
//         }
//         .nav-links a {
//           color: #e2e8f0;
//           text-decoration: none;
//           font-weight: 500;
//           padding: 8px 12px;
//           border-radius: 6px;
//           transition: 0.3s;
//         }
//         .nav-links a:hover {
//           background: #334155;
//           color: #fff;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📚 Study Web</div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: #1e293b;
          color: white;
          width: 100%;       /* full width but scroll ke sath upar chala jayega */
        }
        .logo {
          font-size: 20px;
          font-weight: bold;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          display: inline;
        }
        .nav-links a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 6px;
          transition: 0.3s;
        }
        .nav-links a:hover {
          background: #334155;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


