import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import globe from "./media/globe.webp";
import { useEffect, useState, useRef } from "react";
import ValueProposition from "./components/ValueProposition";

function App() {
  return (
    <div className="App">
      <div className="app-wrap">
        <Header />
        <section className="hero">
          <div className="hero-left">
            <h1>
              Need an automation or
              <br /> control part quickly?
            </h1>
            <div className="input-container">
              <input
                type="text"
                placeholder="What parts are you looking for?"
              ></input>
              <button>
                Search <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="card-container">
              <div className="card-1">3,045,928<br></br> parts</div>
              <div className="card-2"></div>
            </div>
          </div>
        </section>

        <ValueProposition />
      </div>
    </div>
  );
}

export default App;
