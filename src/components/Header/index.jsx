import React from "react";
import { FaSearch, FaBell, FaCog, FaInfoCircle } from "react-icons/fa";
import "./style.css";

const Header = () => {
    return (
        <header className="custom-header">
            <div className="header-left">
                <h2 className="logo">HASS</h2>
            </div>

            <div className="header-center">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search" />
                    <span className="shortcut">⌘K</span>
                </div>
            </div>

            <div className="header-right">
                <FaInfoCircle className="header-icon" />
                <div className="notification-icon">
                    <FaBell />
                    <span className="badge">2</span>
                </div>
                <FaCog className="header-icon" />
                <div className="user-info">
                    <img
                        src="https://i.pravatar.cc/30"
                        alt="User"
                        className="user-avatar"
                    />
                    <span className="user-name">John Doe</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
