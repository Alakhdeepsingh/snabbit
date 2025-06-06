import React from "react";
import Header from "./components/Header";
import Reports from "./components/Reports";
import SideBar from "./components/SideBar";
import './App.css';

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
