import React from "react";
import "./Styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Santa Barbara" />
        <footer>
          Coded by {""}
          <a href="https://github.com/maevaplasse" target="_blank">
            Maeva Plasse
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/maevaplasse/weather-app-react"
            target="_blank"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
