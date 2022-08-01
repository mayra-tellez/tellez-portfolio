import { useEffect } from "react";
import { Link } from "react-router-dom";

import projects from "../../projects.json";
import "../../index.css";
import "./Work.css";
import ProjectCard from "../Projects/ProjectCard";
import image from "../../images/landingPageThumbnail.png";

const Work = () => {
  const projectsList = projects.projects;

  let projectCards = document.getElementsByClassName("ProjectCard");

  const mouseOver = () => {
    // document.getElementById("home").style.color = "red";
    console.log("moused! eek");
  }

  // const mouseOut = () => {
  //   console.log("OUT");
  // }

  useEffect(() => {
    // document.getElementById("home").addEventListener("mouseout", mouseOut);
    // Array.from(projectCards).forEach(card => {
    //   console.log("HERE YE", card);
    //   card.addEventListener("mouseover", mouseOver);
    // })    

    let projectCardsArray = Array.from(projectCards);
    console.log(projectCardsArray);
    
    Array.from(projectCards).forEach(card => {
      console.log("HERE YE", card);
      card.addEventListener("mouseover", mouseOver);
    })

    // Array.from(projectCards).forEach(card => {
    //   card.addEventListener("mouseout", mouseOut);
    // })
  })

  // projectCardsArray.map(projectCard => {
  //   projectCard.addEventListener("mouseover", mouseover())
  //   return true;
  // })

  const projectInfo = projectsList.map(project => {
    return project.name;
  })

  console.log("project list json data:", projectInfo);
  
  // const projectCards = document.getElementsByClassName("ProjectCard");
  // console.log("project cards list", projectCards);

  // const projectCardsArray = [ ...projectCards ];
  // console.log("project array", projectCardsArray);

  // projectCards.map(card => {
  //   console.log("mouseover", card)
  //   return true;
  // })

  return (
    <div className="Work">
      <section className="titleAndImage-section">
        <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
        <div className="project-image-container">
          {/* <img className="project-image" src={image} alt="project thumbnail" /> */}
        </div>
        <h1 className="page-title">work</h1>
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