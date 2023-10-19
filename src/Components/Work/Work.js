import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import projects from "../../projects.json";
import ProjectCard from "./ProjectCard";
import greenBlob from "../../images/greenBlob.svg";

import "../../index.css";
import "./Work.css";

const Work = () => {

  const projectsList = projects.projects;

  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageData, setImageData] = useState({});

  const displayImagePath = imageData.projectImagePath;
  const displayImageAlt = imageData.projectImageAlt;

  return (
    <div id="Work" className="Work">
      <h2>Featured Projects</h2>

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