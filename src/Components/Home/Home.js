import { useEffect } from "react";
import { Link } from "react-router-dom";

import greenBlob from "../../images/greenBlob.svg";
import orangeBlob from "../../images/orangeBlob.svg";
import purpleBlob from "../../images/purpleBlob.svg";

import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {

  useEffect(() => {
    const greenColumn = document.getElementById("green-column");
    const orangeColumn = document.getElementById("orange-column");
    const purpleColumn = document.getElementById("purple-column");

    const greenBlob = document.getElementById("green-blob");
    const orangeBlob = document.getElementById("orange-blob");
    const purpleBlob = document.getElementById("purple-blob");

    const moveGreenBlob = () => {
      greenBlob.style.position = "relative";
      greenBlob.style.top = "140px";
      greenBlob.style.right = "120px";
    }

    const returnGreenBlob = () => {
      greenBlob.style.backgroundColor = "var(--background)";
      greenBlob.style.top = "0px";
      greenBlob.style.right = "0px";
    }

    const moveOrangeBlob = () => {
      orangeBlob.style.position = "relative";
      orangeBlob.style.top = "140px";
      orangeBlob.style.right = "-100px";
    }

    const returnOrangeBlob = () => {
      orangeBlob.style.backgroundColor = "var(--background)";
      orangeBlob.style.top = "0px";
      orangeBlob.style.right = "0px";
    }

    const movePurpleBlob = () => {
      purpleBlob.style.position = "relative";
      purpleBlob.style.top = "140px";
      purpleBlob.style.right = "-340px";
    }

    const returnPurpleBlob = () => {
      purpleBlob.style.backgroundColor = "var(--background)";
      purpleBlob.style.top = "0px";
      purpleBlob.style.right = "0px";
    }

    greenColumn.addEventListener("mouseover", moveGreenBlob);
    orangeColumn.addEventListener("mouseover", moveOrangeBlob);
    purpleColumn.addEventListener("mouseover", movePurpleBlob);

    greenColumn.addEventListener("mouseleave", returnGreenBlob);
    orangeColumn.addEventListener("mouseleave", returnOrangeBlob);
    purpleColumn.addEventListener("mouseleave", returnPurpleBlob);
  })

  return (
    <div className="Home">
      <main>

        <section className="intro">
          <p id="name">mayra téllez</p>
          <p>Front End Software Engineer, <br /> Full Stack Trained</p>
          <div className="blobs-container">
            <img id="green-blob" className="blob" src={greenBlob} alt="green blob"/>
            <img  id="orange-blob" className="blob" src={orangeBlob} alt="orange blob"/>
            <img  id="purple-blob" className="blob" src={purpleBlob} alt="purple blob"/>
          </div>
        </section>

        <section className="menu-section">
          <div id="green-column" className="menu-column">
            <Link className="menu-link" to="/work">
              <h1 className="menu-item right">work</h1>
            </Link>
          </div>

          <div id="orange-column" className="menu-column">
            <Link className="menu-link" to="/about">
              <h1 className="menu-item center">about</h1>
            </Link>
          </div>
          
          <div id="purple-column" className="menu-column">
            <Link className="menu-link" to="/contact">
              <h1 className="menu-item">contact</h1>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;
