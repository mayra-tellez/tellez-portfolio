import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {

  const scrollToAbout = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector("#About").offsetTop,
      behavior: "smooth"
    })
  }

  const scrollToWork = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector("#Work").offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="Landing">

      <h1 className="Landing-name">Mayra <br/> Téllez</h1>

      <p className="Landing-title">I specialize in building web apps and bringing user interface designs to life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <p className="Landing-links-container">
        <Link className="Landing-link" to="" onClick={(e) => scrollToAbout(e)}>About me</Link> / <Link className="Landing-link" to="" onClick={(e) => scrollToWork(e)}>my work</Link>.
      </p>


      {/* &#9786; */}
      {/* * */}
      {/* &#10036; */}
      {/* ✦ */}
      {/* &#128187; */}
    </div>
  )
}

export default Landing;