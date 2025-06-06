import React from "react";
import Header from "./components/Header";
import Reports from "./components/Reports";
import './App.css';
import SideBar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <SideBar />
        <main className="main-content">
          <Reports />
        </main>
      </div>
    </div>
  );
};

export default App;
