import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";

const ReportsHeader = () => {
    return (
        <div className="report-header-wrapper">
            <div className="report-header-content">
                <div className="report-header-title">
                    <IoArrowBack className="back-icon" />
                    <div className="reports-heading">Reports</div>
                </div>
                <div className="report-header-subtitle">View reports for hosts and projects scans</div>
            </div>
        </div>
    );
};

export default ReportsHeader;
