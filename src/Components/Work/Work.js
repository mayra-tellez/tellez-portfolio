import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import projects from "../../projects.json";
import ProjectCard from "./ProjectCard";
import "../../index.css";
import "./Work.css";

const Work = () => {
  const projectsList = projects.projects;

  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageData, setImageData] = useState({});

  const displayImagePath = imageData.projectImagePath;
  const displayImageAlt = imageData.projectImageAlt;

  let projectCards = document.getElementsByClassName("ProjectCard");

  useEffect(() => {

    Array.from(projectCards).forEach(card => {

      card.addEventListener("mouseover", () => {
        setImageDisplay(true);
        setImageData(card.dataset);
      });

      card.addEventListener("mouseleave", () => {
        setImageDisplay(false);
        setImageData({});
      });
    })
  })

  return (
    <div className="Work">
      <section className="titleAndImage-section">
        <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
        <div className="project-image-container">
          {
            imageDisplay ? 
            <img id="project-image" alt={displayImageAlt} src={require("../../images/" + displayImagePath + ".png")}></img> :
            null
          }
        </div>
        <h1 className="page-title">work</h1>
      </section>
      <section id="projects-section">
        {projectsList.map((project, i) => {
          return (
            <ProjectCard project={project} key={i}></ProjectCard>
          )
        })}
      </section>
    </div>
  );
}

export default Work;