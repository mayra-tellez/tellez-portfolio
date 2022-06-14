import projects from "../../projects.json";
import "./ProjectCard.css";

const ProjectCard = () => {
  const projectList = projects.projects;

  return (
    <div className="projectCardContainer">
      {projectList.map((project, i) => {
        const { name, code_url, live_url, tags, description, image } = project;
        return (
          <div className="projectCard" key={i}>
            <h3>{name}</h3>
            <a href={code_url} target="blank">Code Repo</a>
            <a href={live_url} target="blank">Live Site</a>
            <p>{description}</p>
            <ul>
              {tags.map((tag, i) => {
                return <li key={i}>{tag}</li>
              })}
            </ul>
            <img alt="project thumbnail" src={image}></img>
          </div>
        )
      })}
    </div>
  );
}

export default ProjectCard;