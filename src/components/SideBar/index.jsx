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
                    <div className="menu-item"><FaTachometerAlt /> <span>Dashboard</span></div>
                </li>

                <li className={active === "Environments" ? "active" : ""} onClick={() => {
                    setActive("Environments");
                    setOpenEnv(!openEnv);
                }}>
                    <div className="menu-item">
                        <FaGlobe /> <span>Environments</span>
                        {openEnv ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
                    </div>
                </li>

                <li className={active === "Executions" ? "active" : ""} onClick={() => setActive("Executions")}>
                    <div className="menu-item"><FaClipboardList /> <span>Executions</span></div>
                </li>

                <li className={active === "Configuration" ? "active" : ""} onClick={() => setActive("Configuration")}>
                    <div className="menu-item"><FaServer /> <span>Configuration</span></div>
                </li>

                <li className={active === "Reports" ? "active" : ""} onClick={() => setActive("Reports")}>
                    <div className="menu-item"><FaChartLine /> <span>Reports</span></div>
                </li>

                <li className={active === "Administration" ? "active" : ""} onClick={() => {
                    setActive("Administration");
                    setOpenAdmin(!openAdmin);
                }}>
                    <div className="menu-item">
                        <FaUsersCog /> <span>Administration</span>
                        {openAdmin ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
                    </div>
                </li>
            </ul>

            <div className="settings">
                <FaCog /> <span>Settings</span>
            </div>
        </div>
    );
};

export default SideBar;
