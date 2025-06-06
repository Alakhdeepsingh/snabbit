import React from "react";
import { FaSearch, FaBell, FaCog, FaInfoCircle } from "react-icons/fa";
import "./style.css";

const Header = () => {
    return (
        <header className="custom-header">
            <div className="header-left">
                <div className="logo">HASS</div>
            </div>

            <div className="header-center">
                <div className="search-box">
                    {/* <FaSearch className="search-icon" /> */}
                    <img src="../../assets/search.png" className="header-icon" alt="" />

                    <input type="text" placeholder="Search" />
                    <span className="shortcut">⌘K</span>
                </div>
            </div>

            <div className="header-right">
                <div className="circle-icon">
                    {/* <FaInfoCircle className="header-icon" /> */}
                    <img src="../../assets/Icon.png" className="header-icon" alt="" />
                </div>
                <div className="notification-icon">
                    {/* <FaBell /> */}
                    <img src="../../assets/bell.png" className="header-icon" alt="" />

                    <span className="badge">2</span>
                </div>
                {/* <FaCog className="header-icon" /> */}
                <div className="user-info">
                    <span className="user-name">John Doe</span>
                    <img
                        src="https://i.pravatar.cc/30"
                        alt="User"
                        className="user-avatar"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
