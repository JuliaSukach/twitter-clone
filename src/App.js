import React from "react";
import "./App.css";
import Feed from "./feed/Feed";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
