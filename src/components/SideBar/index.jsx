import React, { useState } from "react";
import "./style.css";
import {
    FaTachometerAlt,
    FaGlobe,
    FaClipboardList,
    FaServer,
    FaChartLine,
    FaUsersCog,
    FaCog,
    FaChevronDown,
    FaChevronRight
} from "react-icons/fa";

const SideBar = () => {
    const [openEnv, setOpenEnv] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);
    const [active, setActive] = useState("Reports");

    return (
        <div className="sidebar">
            <ul className="menu">
                <li className={active === "Dashboard" ? "active" : ""} onClick={() => setActive("Dashboard")}>
                    <div className="menu-item"><FaTachometerAlt /> <span className="sidebar-menu-texts">Dashboard</span></div>
                </li>

                <li className={active === "Environments" ? "active" : ""} onClick={() => {
                    setActive("Environments");
                    setOpenEnv(!openEnv);
                }}>
                    <div className="menu-item">
                        <FaGlobe /> <span className="sidebar-menu-texts">Environments</span>
                        {openEnv ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
                    </div>
                </li>

                <li className={active === "Executions" ? "active" : ""} onClick={() => setActive("Executions")}>
                    <div className="menu-item"><FaClipboardList /> <span className="sidebar-menu-texts">Executions</span></div>
                </li>

                <li className={active === "Configuration" ? "active" : ""} onClick={() => setActive("Configuration")}>
                    <div className="menu-item"><FaServer /> <span className="sidebar-menu-texts">Configuration</span></div>
                </li>

                <li className={active === "Reports" ? "active" : ""} onClick={() => setActive("Reports")}>
                    <div className="menu-item"><FaChartLine /> <span className="sidebar-menu-texts">Reports</span></div>
                </li>

                <li className={active === "Administration" ? "active" : ""} onClick={() => {
                    setActive("Administration");
                    setOpenAdmin(!openAdmin);
                }}>
                    <div className="menu-item">
                        <FaUsersCog /> <span className="sidebar-menu-texts">Administration</span>
                        {openAdmin ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
                    </div>
                </li>
            </ul>

            <div className="settings">
                <FaCog /> <span className="sidebar-menu-texts">Settings</span>
            </div>
        </div>
    );
};

export default SideBar;
