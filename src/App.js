import { useState, createContext } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import Details from "./components/Details";
import "./App.css";

const locale = navigator.language || "en";
const _lang = locale === "es" ? Spanish : English;


export const LanguageContext = createContext()
function App() {
  const [lang, setLang] = useState(_lang);
  return (
    <LanguageContext.Provider value={{lang}}>
    <div className="App">
      <header className="App-header">
        <div>
          <button
            onClick={() => {
              setLang(English);
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              setLang(Spanish);
            }}
          >
            ES
          </button>
        </div>
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
        <Details/>
      </header>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
