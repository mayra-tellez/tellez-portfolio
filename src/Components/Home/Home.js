// import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Nav/Header";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Footer from "../Nav/Footer";
import Projects from "../Projects/Projects";
// import SocialSidebar from "../Sidebars/SocialSidebar";
// import EmailSidebar from "../Sidebars/EmailSidebar";

// import greenBlob from "../../images/greenBlob.svg";
// import orangeBlob from "../../images/orangeBlob.svg";
// import purpleBlob from "../../images/purpleBlob.svg";

import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {

  // useEffect(() => {
    // const greenColumn = document.getElementById("green-column");
    // const orangeColumn = document.getElementById("orange-column");
    // const purpleColumn = document.getElementById("purple-column");

    // const greenBlob = document.getElementById("green-blob");
    // const orangeBlob = document.getElementById("orange-blob");
    // const purpleBlob = document.getElementById("purple-blob");

    // green stop 1 - stop-color="rgba(143.78, 178.763, 138.33, 1)"
    // green stop 2 - stop-color="rgba(167.223, 255, 164.211, 1)"

    // orange stop 1 - stop-color="rgba(255, 136.963, 43.28, 1)"
    // orange stop 2 - stop-color="rgba(255, 225.191, 184.367, 1)"
    
    // purple stop 1 - stop-color="rgba(160.625, 27.318, 178.799, 1)"
    // purple stop 2 - stop-color="rgba(249.46, 233.315, 255, 1)"

    // <stop id="stop1" stop-color="rgba(143.78, 178.763, 138.33, 1)" offset="0%"></stop>
    // <stop id="stop2" stop-color="rgba(167.223, 255, 164.211, 1)" offset="100%"></stop>

    // console.log(greenBlob);

    // const moveGreenBlob = () => {
    //   greenBlob.style.position = "relative";
    //   greenBlob.style.top = "140px";
    //   greenBlob.style.right = "120px";
    //   greenBlob.style.stopColor = "white";
    // }

    // moveGreenBlob();

    // const returnGreenBlob = () => {
    //   greenBlob.style.backgroundColor = "var(--background)";
    //   greenBlob.style.top = "0px";
    //   greenBlob.style.right = "0px";
    // }

    // const moveOrangeBlob = () => {
    //   orangeBlob.style.position = "relative";
    //   orangeBlob.style.top = "140px";
    //   orangeBlob.style.right = "-100px";
    // }

    // const returnOrangeBlob = () => {
    //   orangeBlob.style.backgroundColor = "var(--background)";
    //   orangeBlob.style.top = "0px";
    //   orangeBlob.style.right = "0px";
    // }

    // const movePurpleBlob = () => {
    //   purpleBlob.style.position = "relative";
    //   purpleBlob.style.top = "140px";
    //   purpleBlob.style.right = "-340px";
    // }

    // const returnPurpleBlob = () => {
    //   purpleBlob.style.backgroundColor = "var(--background)";
    //   purpleBlob.style.top = "0px";
    //   purpleBlob.style.right = "0px";
    // }

    // greenColumn.addEventListener("mouseover", moveGreenBlob);
    // orangeColumn.addEventListener("mouseover", moveOrangeBlob);
    // purpleColumn.addEventListener("mouseover", movePurpleBlob);

    // greenColumn.addEventListener("mouseleave", returnGreenBlob);
    // orangeColumn.addEventListener("mouseleave", returnOrangeBlob);
    // purpleColumn.addEventListener("mouseleave", returnPurpleBlob);
  // })

  return (
    <div className="Home">

      <Header />
      <main>
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />

      {/* <SocialSidebar id="social-sidebar" />
      <EmailSidebar id="email-sidebar" /> */}

      {/* <div className="blobs-container">
        <img id="green-blob" className="blob" src={greenBlob} alt="green blob"/>
        <img  id="orange-blob" className="blob" src={orangeBlob} alt="orange blob"/>
        <img  id="purple-blob" className="blob" src={purpleBlob} alt="purple blob"/>
      </div> */}
      
    </div>
  );
}

export default Home;
