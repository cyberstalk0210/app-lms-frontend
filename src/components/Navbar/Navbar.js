import React from 'react';
import { FiUser } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="user-profile">
          {user?.image ? (
            <img src={user.image} alt="User" className="user-avatar" />
          ) : (
            <FiUser className="avatar-icon" />
          )}
          <span className="user-name">{user?.name || 'User'}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
