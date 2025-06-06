import React, { useState } from "react";
import { data } from "../../data/stubdata";
import {
    FaEye,
    FaRegCopy,
    FaChevronUp,
    FaChevronDown,
} from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import "./style.css";
import ReportsHeader from "../ReportHeader";

const tabs = ["Weekly", "Monthly", "Yearly", "Custom"];

const filterByTimeRange = (items, filterType) => {
    const now = new Date();

    return items.filter((item) => {
        const itemDate = new Date(item["Start Date"]);
        switch (filterType) {
            case "Weekly": {
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
                return itemDate >= oneWeekAgo && itemDate <= now;
            }
            case "Monthly": {
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(now.getMonth() - 1);
                return itemDate >= oneMonthAgo && itemDate <= now;
            }
            case "Yearly": {
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(now.getFullYear() - 1);
                return itemDate >= oneYearAgo && itemDate <= now;
            }
            case "Custom":
                return true; // Later implement custom range picker
            default:
                return true;
        }
    });
};

const Reports = () => {
    const [filter, setFilter] = useState("Weekly");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [showSortOptions, setShowSortOptions] = useState(false);

    // Filter by Type field (Template, Test case)
    const [typeFilter, setTypeFilter] = useState("");

    // Apply time range filter first
    let filtered = filterByTimeRange(data, filter);

    // Apply Type filter if selected
    if (typeFilter) {
        filtered = filtered.filter(
            (item) =>
                item.Type && item.Type.toLowerCase() === typeFilter.toLowerCase()
        );
    }

    // Apply search filter
    filtered = filtered.filter((item) =>
        Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    // Sorting
    const sorted = [...filtered].sort((a, b) => {
        if (!sortBy) return 0;

        // Handle possible undefined/null or non-string values safely
        const valA = a[sortBy] ? a[sortBy].toString() : "";
        const valB = b[sortBy] ? b[sortBy].toString() : "";
        return valA.localeCompare(valB);
    });

    const exportCSV = () => {
        const headers = Object.keys(data[0]).join(",");
        const rows = sorted.map((obj) => Object.values(obj).join(",")).join("\n");
        const csv = `${headers}\n${rows}`;
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "report.csv";
        a.click();
    };

    return (
        <>
            <ReportsHeader />

            <div className="reports-wrapper">
                <div className="containers">
                    <div className="sub-container">
                        <div className="tab active">Hosts</div>
                        <div className="tab">Projects</div>
                    </div>
                    <div className="topbar">
                        <div className="host-heading">Hosts</div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="tabs">
                                {tabs.map((t) => (
                                    <button
                                        key={t}
                                        className={`tab ${filter === t ? "active" : ""}`}
                                        onClick={() => setFilter(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <div className="filter-sort-wrapper" style={{ position: "relative" }}>
                                <button
                                    className="filter-sort-button"
                                    onClick={() => setShowFilterOptions(!showFilterOptions)}
                                >
                                    <span>Filter</span>
                                    <span className="icon-stack">
                                        <FaChevronUp className="icon" />
                                        <FaChevronDown className="icon" />
                                    </span>
                                </button>

                                {/* Filter Options Panel */}
                                {showFilterOptions && (
                                    <div
                                        className="filter-options-dropdown"
                                        style={{
                                            position: "absolute",
                                            top: "40px",
                                            right: "0",
                                            background: "#fff",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            padding: "12px",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                            zIndex: 100,
                                            minWidth: "180px",
                                        }}
                                    >
                                        <label
                                            htmlFor="typeFilter"
                                            style={{ display: "block", marginBottom: "8px" }}
                                        >
                                            Type:
                                        </label>
                                        <select
                                            id="typeFilter"
                                            value={typeFilter}
                                            onChange={(e) => setTypeFilter(e.target.value)}
                                            style={{ width: "100%", padding: "6px" }}
                                        >
                                            <option value="">All</option>
                                            <option value="Template">Template</option>
                                            <option value="Test case">Test case</option>
                                        </select>

                                        <button
                                            onClick={() => setShowFilterOptions(false)}
                                            style={{
                                                marginTop: "10px",
                                                padding: "6px 12px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                )}

                                <button
                                    className="filter-sort-button"
                                    onClick={() => setShowSortOptions(!showSortOptions)}
                                >
                                    <span>Sort</span>
                                    <span className="icon-stack">
                                        <FaChevronUp className="icon" />
                                        <FaChevronDown className="icon" />
                                    </span>
                                </button>

                                {/* Sort Options Panel */}
                                {showSortOptions && (
                                    <div
                                        className="sort-options-dropdown"
                                        style={{
                                            position: "absolute",
                                            top: "40px",
                                            right: "0",
                                            background: "#fff",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            padding: "12px",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                            zIndex: 100,
                                            minWidth: "180px",
                                        }}
                                    >
                                        <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                                            Sort By:
                                        </div>
                                        {Object.keys(data[0]).map((key) => (
                                            <div
                                                key={key}
                                                style={{
                                                    padding: "6px 8px",
                                                    cursor: "pointer",
                                                    backgroundColor: sortBy === key ? "#eee" : "transparent",
                                                }}
                                                onClick={() => {
                                                    setSortBy(key);
                                                    setShowSortOptions(false); // close dropdown after selecting
                                                }}
                                            >
                                                {key}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="right-controls">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="search-input"
                                />
                                <button onClick={exportCSV} className="export-btn">
                                    <HiOutlineDownload /> Export
                                </button>
                            </div>
                        </div>
                    </div>

                    <table className="reports-table">
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map((key) => (
                                    <th key={key} onClick={() => setSortBy(key)} style={{ cursor: "pointer" }}>
                                        {key}
                                        {sortBy === key && (
                                            <span style={{ marginLeft: "4px" }}>
                                                { /* Simple up/down arrow depending on sort direction if needed */}
                                                🔽
                                            </span>
                                        )}
                                    </th>
                                ))}
                                <th>Logs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sorted.map((row, i) => (
                                <tr key={i}>
                                    {Object.values(row).map((val, j) => (
                                        <td key={j}>{val}</td>
                                    ))}
                                    <td className="log-icons">
                                        <FaEye /> <FaRegCopy />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="main-container">
                        <div className="content">
                            {/* Your main content will go here */}
                        </div>
                        <div className="arrow-container">
                            <span className="arrow left-arrow">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                            <span className="arrow right-arrow">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Reports;
