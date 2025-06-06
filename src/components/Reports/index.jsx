import React, { useState } from "react";
import { data } from "../../data/stubdata";
import { FaArrowLeft, FaEye, FaRegCopy, FaChevronUp, FaChevronDown } from "react-icons/fa";
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
                return true; // Later you can implement custom range picker
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

    const filtered = filterByTimeRange(data, filter).filter((item) =>
        Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    const sorted = [...filtered].sort((a, b) => {
        if (!sortBy) return 0;
        return a[sortBy].localeCompare(b[sortBy]);
    });

    const exportCSV = () => {
        const headers = Object.keys(data[0]).join(",");
        const rows = sorted.map(obj => Object.values(obj).join(",")).join("\n");
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

                            <div className="filter-sort-wrapper">
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
                                    <th key={key} onClick={() => setSortBy(key)}>{key}</th>
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
                </div>
            </div>
        </>
    );
};

export default Reports;
