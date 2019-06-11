import React from "react";
import logo1 from "./logo1.svg";
import "./App.css";
import MyDive from "./MyDive";

function App() {
  return (
    <div className="container">
      <br />
      <p className="Center">
        <img src={logo1} className="Mylogo" alt="logo1" />
      </p>

      <h1 className="Center">Book search</h1>
      <MyDive />
    </div>
  );
}

export default App;
