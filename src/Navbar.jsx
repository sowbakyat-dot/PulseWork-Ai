import React from "react";

function Navbar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">✦</span>
        <h2>PulseWorks AI</h2>
      </div>

      <ul className="nav-links">
        <li className="active">
          <span></span> Dashboard
        </li>
        <li>
          <span></span> Projects
        </li>
        <li>
          <span></span> Tasks
        </li>
        <li>
          <span></span> Team
        </li>
        <li>
          <span></span> Reports
        </li>
        <li>
          <span></span> Settings
        </li>
      </ul>
    </div>
  );
}

export default Navbar;