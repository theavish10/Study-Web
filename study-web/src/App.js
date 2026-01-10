import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

import Course from "./Pages/Course/Course";
import CProgramming from "./Pages/Course/CProgramming";
import CppProgramming from "./Pages/Course/CppProgramming";
import Java from "./Pages/Course/Java";
import Python from "./Pages/Course/Python";
import JavaScript from "./Pages/Course/JavaScript";
import ReactJS from "./Pages/Course/ReactJS";

import Tutorials from "./Pages/Tutorials/Tutorials";
import Html from "./Pages/Tutorials/Html";
import Css from "./Pages/Tutorials/Css";
import JavaScriptTutorial from "./Pages/Tutorials/JavaScript";
import ReactJsTutorial from "./Pages/Tutorials/ReactJs";
import PythonTutorial from "./Pages/Tutorials/Python";
import CCpp from "./Pages/Tutorials/CCpp";
import JavaTutorial from "./Pages/Tutorials/Java";
import Dsa from "./Pages/Tutorials/Dsa";
import Sql from "./Pages/Tutorials/Sql";
import Git from "./Pages/Tutorials/Git";

import Compiler from "./Pages/Compiler";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Settings/Profile";
import Security from "./Pages/Settings/Security";
import Notifications from "./Pages/Settings/Notifications";
import Theme from "./Pages/Settings/Theme";
import Privacy from "./Pages/Settings/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login & Signup without navbar + sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages with navbar + sidebar */}
        <Route
          path="/*"
          element={
            <div>
              <Navbar /> {/* normal navbar (scroll ke sath chala jayega) */}
              <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ marginLeft: "180px", padding: "20px", flex: 1 }}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Courses */}
                    <Route path="courses" element={<Course />} />
                    <Route path="courses/c" element={<CProgramming />} />
                    <Route path="courses/cpp" element={<CppProgramming />} />
                    <Route path="courses/java" element={<Java />} />
                    <Route path="courses/python" element={<Python />} />
                    <Route path="courses/javascript" element={<JavaScript />} />
                    <Route path="courses/react" element={<ReactJS />} />

                    {/* Tutorials */}
                    <Route path="tutorials" element={<Tutorials />} />
                    <Route path="tutorials/html" element={<Html />} />
                    <Route path="tutorials/css" element={<Css />} />
                    <Route
                      path="tutorials/javascript"
                      element={<JavaScriptTutorial />}
                    />
                    <Route path="tutorials/react" element={<ReactJsTutorial />} />
                    <Route path="tutorials/python" element={<PythonTutorial />} />
                    <Route path="tutorials/c_cpp" element={<CCpp />} />
                    <Route path="tutorials/java" element={<JavaTutorial />} />
                    <Route path="tutorials/dsa" element={<Dsa />} />
                    <Route path="tutorials/sql" element={<Sql />} />
                    <Route path="tutorials/git" element={<Git />} />

                    {/* Others */}
                    <Route path="compiler" element={<Compiler />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="about" element={<AboutUs />} />

                    {/* Settings */}
                    <Route path="settings" element={<Settings />} />
                    <Route path="settings/profile" element={<Profile />} />
                    <Route path="settings/security" element={<Security />} />
                    <Route
                      path="settings/notifications"
                      element={<Notifications />}
                    />
                    <Route path="settings/theme" element={<Theme />} />
                    <Route path="settings/privacy" element={<Privacy />} />

                    {/* 404 */}
                    <Route
                      path="*"
                      element={
                        <h2 style={{ padding: "20px" }}>404 ❌ Page Not Found</h2>
                      }
                    />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

