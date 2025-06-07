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

import Earth from "../../assets/earth.png"
import ExecutionIcon from "../../assets/execution.png"
import ConfigurationIcon from "../../assets/configuration.png"
import ReportsIcon from "../../assets/reports.png"
import AdministrationIcon from "../../assets/administration.png"
import SpeedIcon from "../../assets/speed.png"



const SideBar = () => {
    const [openEnv, setOpenEnv] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);
    const [active, setActive] = useState("Reports");

    return (
        <div className="sidebar">
            <ul className="menu">
                <li className={active === "Dashboard" ? "active" : ""} onClick={() => setActive("Dashboard")}>
                    <div className="menu-item">
                        <img src={SpeedIcon} className="sidebar-logos" alt="hello" />
                        <span className="sidebar-menu-texts">Dashboard</span></div>
                </li>

                <li className={active === "Environments" ? "active" : ""} onClick={() => {
                    setActive("Environments");
                    setOpenEnv(!openEnv);
                }}>
                    <div className="menu-item">
                        {/* <FaGlobe />  */}
                        <img src={Earth} className="sidebar-logos" alt="hello" />

                        <span className="sidebar-menu-texts">Environments</span>
                        {openEnv ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
                    </div>
                </li>

                <li className={active === "Executions" ? "active" : ""} onClick={() => setActive("Executions")}>
                    <div className="menu-item">
                        {/* <FaClipboardList /> */}
                        <img src={ExecutionIcon} className="sidebar-logos" alt="hello" />

                        <span className="sidebar-menu-texts">Executions</span></div>
                </li>

                <li className={active === "Configuration" ? "active" : ""} onClick={() => setActive("Configuration")}>
                    <div className="menu-item">
                        {/* <FaServer />  */}
                        <img src={ConfigurationIcon} className="sidebar-logos" alt="hello" />

                        <span className="sidebar-menu-texts">Configuration</span></div>
                </li>

                <li className={active === "Reports" ? "active" : ""} onClick={() => setActive("Reports")}>
                    <div className="menu-item">
                        {/* <FaChartLine /> */}
                        <img src={ReportsIcon} className="sidebar-logos" alt="hello" />

                        <span className="sidebar-menu-texts">Reports</span></div>
                </li>

                <li className={active === "Administration" ? "active" : ""} onClick={() => {
                    setActive("Administration");
                    setOpenAdmin(!openAdmin);
                }}>
                    <div className="menu-item">
                        {/* <FaUsersCog />  */}
                        <img src={AdministrationIcon} className="sidebar-logos" alt="hello" />

                        <span className="sidebar-menu-texts">Administration</span>
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
