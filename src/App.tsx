// src/App.tsx
import React from "react";
import Graph from "./Graph";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Network Graph</h1>
      <p>Click to add a new node, drag arrow to add edges between nodes</p>
      <p>Backspace/Del to remove node/edges</p>
      <Graph />
    </div>
  );
};

export default App;
