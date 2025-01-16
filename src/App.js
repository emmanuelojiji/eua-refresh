import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import globe from "./media/globe.webp";
import { useEffect, useState, useRef } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [display, setDisplay] = useState("none");
  const [animationState, setAnimationState] = useState("");
  const [imageState, setImageState] = useState("");
  const [hasShrunk, setHasShrunk] = useState(false);

  const displayTimeoutRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY >= 200 && !hasShrunk) {
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      setHasShrunk(true);
      setImageState("shrink");
      setAnimationState("showText");

      setTimeout(() => {
        setDisplay("flex");
      }, 300);
    } else if (currentScrollY < 200 && hasShrunk) {
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      setHasShrunk(false);
      setAnimationState("hideText");

      setTimeout(() => {
        setImageState("grow");
      }, 300);

      setTimeout(() => {
        setDisplay("none");
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
    };
  }, [hasShrunk]);

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
            <input
              type="text"
              placeholder="What parts are you looking for?"
            ></input>
          </div>
        </section>

        <section className="value-proposition-container">
          <img src={globe} className={imageState} alt="Globe" />
          <div
            className={`value-proposition-text ${animationState}`}
            style={{ display: display }}
          >
            <h2>
              Value Proposition -{" "}
              <span className="grey">
                Speak to the customer's wants and needs.
              </span>
            </h2>
            <p>
              Speak to the customer’s wants and needs. Outline how our service
              can be the answer to their problems. Help them to make
              manufacturing possible. Position the human element through the
              lens of their eyes.
            </p>
            <button>Button here</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
