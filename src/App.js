import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import globe from "./media/globe.webp";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const [display, setDisplay] = useState("none");

  const [animationState, setAnimationState] = useState("");

  const [imageState, setImageState] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    console.log(scrollY);

    if (scrollY >= 200) {
      setTimeout(() => {
        setDisplay("flex");
      }, 300);

      setAnimationState("showText");

      setImageState("shrink");
    }

    if (scrollY <= 200) {
      setAnimationState("hideText");

      setTimeout(() => {
        setDisplay("none");
      }, 1100);
    }
  };

  return (
    <div className="App">
      <div className="app-wrap">
        <Header />

        <section className="hero">
          <h1>Need an automation or control part quickly?</h1>
          <input
            type="text"
            placeholder="What parts are you looking for?"
          ></input>
        </section>

        <section className="value-proposition-container">
          <img src={globe} className={`${imageState}`} />

          <div
            className={`value-proposition-text ${animationState}`}
            style={{ display: display }}
          >
            <h1>Value proposiiton</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec odio posuere odio vehicula suscipit. Morbi pharetra ultricies
              justo. Cras aliquet, metus ac luctus consectetur,{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
