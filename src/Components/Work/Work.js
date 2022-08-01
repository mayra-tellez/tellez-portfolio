import { Link } from "react-router-dom";

import projects from "../../projects.json";
import "../../index.css";
import "./Work.css";
import ProjectCard from "../Projects/ProjectCard";
import image from "../../images/landingPageThumbnail.png";

const Work = () => {
  const projectsList = projects.projects;

  return (
    <div className="Work">
      <section className="titleAndImage-section">
        <Link to="/">back to home</Link>
        <h1 className="page-title">work</h1>
        <img className="project-image" src={image} alt="project thumbnail" />
      </section>
      <section className="projects-section">
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