import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
  return (
    <div className="Landing">
      {/* <p>Hi, my name is</p> */}
      {/* <p id="name">Mayra Téllez</p> */}
      {/* <p>I’m a software engineer specializing in building highly performant applications that solve real-world problems and provide users with an awesome experience. I'm currently working using Spring Boot and Angular.</p> */}
      {/* <p>
        Hi, I'm Jessica Hernandez <br />
        A UX Researcher living <br />
        in San Francisco, CA with <br />
        experience in Education
      </p> */}
      {/* <p>
        Hi, I'm Mayra Téllez <br />
        A Software Engineer living <br />
        in Austin, TX with <br />
        experience in Client Services
      </p> */}
      <h1 className="Landing-name">Mayra <br/> Téllez</h1>
      <p className="Landing-title">I specialize in building web apps with front-end frameworks and bringing user interface designs to life.*</p>
      {/* <div className="bg"></div> */}
      {/* <div className="c"></div> */}

      <p className="Landing-links-container">
        <Link className="Landing-link" to="/about">About me</Link> / <Link className="Landing-link" to="/work">my work</Link>.
      </p>

      {/* <div className="color-shadow"></div> */}

      {/* &#9786; */}
      {/* * */}
      {/* &#10036; */}
      {/* ✦ */}
      {/* &#128187; */}
      {/* <p className="Landing-title">software engineer</p> */}
    </div>
  )
}

export default Landing;