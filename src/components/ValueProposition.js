import { useEffect, useRef, useState } from "react";
import "./ValueProposition.scss";
import globe from "../media/globe.webp";

const ValueProposition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [textDisplay, setTextDisplay] = useState("none");
  const [textAnimationState, setTextAnimationState] = useState("");
  const [imageState, setImageState] = useState("");
  const [hasShrunk, setHasShrunk] = useState(false);

  const [boxDisplay, setBoxDisplay] = useState("none");
  const [boxAnimationState, setBoxAnimationState] = useState("");

  const [pillDisplay, setPillDisplay] = useState("none");
  const [pillAnimationState, setPillAnimationState] = useState("none");

  const displayTimeoutRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY >= 200 && !hasShrunk) {
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      setHasShrunk(true);
      setImageState("shrink");

      setTextAnimationState("showText");

      setTimeout(() => {
        setBoxDisplay("flex");
      }, 500);

      setBoxAnimationState("showBox");

      setTimeout(() => {
        setTextDisplay("flex");
      }, 300);

      setTimeout(() => {
        setPillDisplay("block");
      }, 800);

      setPillAnimationState("showPill");
    } else if (currentScrollY < 200 && hasShrunk) {
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      setHasShrunk(false);

      setBoxAnimationState("hideBox");

      setTimeout(() => {
        setBoxDisplay("none");
      }, 300);

      setTextAnimationState("hideText");

      setTimeout(() => {
        setImageState("grow");
      }, 300);

      setTimeout(() => {
        setTextDisplay("none");
      }, 400);

      setPillAnimationState("hidePill");

      setTimeout(() => {
        setPillDisplay("none");
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
    <section className="value-proposition-container">
      <div className={`globe-container ${imageState}`}>
        <div
          className={`parts-box-container ${boxAnimationState}`}
          style={{ display: boxDisplay }}
        >
          <div className="parts-box-top">
            <div className="star-container">
              <i class="fa-solid fa-star"></i>
            </div>
            3,045,928 parts
          </div>
          <div className="parts-box-bottom">
            Lorem ipsum dolor sit
            <br /> amet, consectetur.
          </div>
        </div>

        <div
          className={`numbers-pill ${pillAnimationState}`}
          style={{ display: pillDisplay }}
        >
          3,045,928 parts
        </div>
        <img src={globe} alt="Globe" />
      </div>
      <div
        className={`value-proposition-text-container ${textAnimationState}`}
        style={{ display: textDisplay }}
      >
        <h2>
          Value Proposition -{" "}
          <span className="grey">Speak to the customer's wants and needs.</span>
        </h2>
        <p>
          Speak to the customer’s wants and needs. Outline how our service can
          be the answer to their problems. Help them to make manufacturing
          possible. Position the human element through the lens of their eyes.
        </p>
        <button>CTA</button>
      </div>
    </section>
  );
};

export default ValueProposition;
