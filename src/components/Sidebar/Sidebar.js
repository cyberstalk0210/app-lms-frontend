import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBook, FiUsers, FiCalendar, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar= () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>LMS</h2>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-item">
          <FiHome className="nav-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/courses" className="nav-item">
          <FiBook className="nav-icon" />
          <span>Courses</span>
        </Link>
        <Link to="/students" className="nav-item">
          <FiUsers className="nav-icon" />
          <span>Students</span>
        </Link>
        <Link to="/schedule" className="nav-item">
          <FiCalendar className="nav-icon" />
          <span>Schedule</span>
        </Link>
        <Link to="/settings" className="nav-item">
          <FiSettings className="nav-icon" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
