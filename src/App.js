import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React from "react";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
