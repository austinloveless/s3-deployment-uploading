import React from "react";
import logo from "./logo.svg";
import "./App.css";
import S3Upload from "./s3Upload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <S3Upload />
      </header>
    </div>
  );
}

export default App;
