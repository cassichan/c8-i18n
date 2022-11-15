import { useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import "./App.css";

const locale = navigator.language || "en";
const lang = locale === "es" ? Spanish : English;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Bracket notation since includes a period */}
        <h1>{lang["app.header"]}</h1>
        <p>{lang["app.subhead"]}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {lang["app.cta"]}
        </a>
      </header>
    </div>
  );
}

export default App;
