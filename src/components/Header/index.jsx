import React from "react";
import { FaSearch, FaBell, FaCog, FaInfoCircle } from "react-icons/fa";
import "./style.css";
import HeaderIcon from "../../assets/headereye.png";
import BellIcon from "../../assets/bell.png"
import SearchHeader from "../../assets/searchheader.png"

const Header = () => {
    return (
        <header className="custom-header">
            <div className="header-left">
                <div className="logo">HASS</div>
            </div>

            <div className="header-center">
                <div className="search-box">
                    {/* <FaSearch className="search-icon" /> */}
                    <img src={SearchHeader} className="header-icon" alt="" />

                    <input type="text" placeholder="Search" className="search-texting" />
                    <span className="shortcut">⌘K</span>
                </div>
            </div>

            <div className="header-right">
                <div className="circle-icon">
                    {/* <FaInfoCircle className="header-icon" /> */}
                    <img src={HeaderIcon} className="header-icon" alt="" />
                </div>
                <div className="notification-icon">
                    {/* <FaBell /> */}
                    <img src={BellIcon} className="header-icon" alt="" />

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
