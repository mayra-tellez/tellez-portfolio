import { Link } from "react-router-dom";

import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import profilePic from "../../images/profilePicNoBackground.png";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
      <h1 className="page-title">about</h1>
      <img className="About-img" src={profilePic} alt="Mayra Tellez" />
      <p className="About-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}

export default About;