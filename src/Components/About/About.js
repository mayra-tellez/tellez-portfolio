import { Link } from "react-router-dom";

import profilePic from "../../images/profilePicNoBackground.png";
import orangeBlob from "../../images/orangeBlob.svg";

import "./About.css";

const About = () => {
  return (
    <div className="About">
      <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
      <h1 className="page-title">about</h1>
      <img className="blob" src={orangeBlob} alt="orange blob"/>
      <img className="About-img" src={profilePic} alt="Mayra Tellez" />
      <section className="About-main">
        <h1 className="page-title">hello!</h1>
        <br />
        <h2 className="subtitle">I'm Mayra <span>&#9786;</span> I Develop the Web's Front End</h2>
        <p className="About-paragraph">
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          <br />
          <br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <button className="resume-button">
          <a className="resume-link" href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">My Resume</a>
          <span className="arrow">&#8599;</span>
        </button>
      </section>
    </div>
  )
}

export default About;