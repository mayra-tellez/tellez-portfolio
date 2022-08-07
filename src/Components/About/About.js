import { Link } from "react-router-dom";

import profilePic from "../../images/profilePicNoBackground.png";
import orangeBlob from "../../images/orangeBlob.svg";

import "./About.css";

const About = () => {

  const timeOfDay = () => {
    const today = new Date();
    const time = today.getHours();
  
    if (time >= 0 && time < 12) {
      return "morning";
    } else if (time >= 12 && time < 17) {
      return "afternoon";
    } else if (time >= 17 && time <= 23) {
      return "evening";
    }
  }

  return (
    <div className="About">
      <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
      <h1 className="page-title">about</h1>
      <img className="blob" src={orangeBlob} alt="orange blob"/>
      <img className="About-img" src={profilePic} alt="Mayra Tellez" />

      <section className="About-main">
        <h1 className="page-title">hello!</h1>
        <br />
        <h2 className="subtitle">I'm Mayra. Developer and Problem Solver.</h2>
        <p className="About-paragraph">
          <br />
          Nothing makes me happier than coding a solution and doing it well. As a recent graduate of Austin Coding Academy and their  internship program, I've learned there are endless possibilites to finding an answer, and that's what makes it so exciting.  
          <br />
          <br />
          I found my way to web development through some small exposure during my time in the fashion, retail and customer service industries. At Stitch Fix, I awed at the projects the engineers worked on. In my following roles at Beautifully Loved and Wildflowers Boutique, I created and updated websites first-hand. Now, I'm developing sites and apps from scratch for the people around me, and the best part of it all is that I'm helping to make a difference with work I enjoy. 
          <br />
          <br />
          Feel free to browse around and let me know if there is anything I can do to help you, too. Thanks for stopping by - enjoy your {timeOfDay()}!
        </p>
        <br />

        <button className="resume-button">
          <a className="resume-link" href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">My Resumé</a>
          <span className="arrow">&#8599;</span>
        </button>
      </section>

    </div>
  )
}

export default About;