import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Input Form</div>
        <div className="card-body">
          <form>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control mb-2"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Enter password"
            />
            <button className="btn btn-primary form-control">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
