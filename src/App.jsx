import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Reports from "./components/Reports";
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Reports />
        </main>
      </div>
    </div>
  );
};

export default App;
