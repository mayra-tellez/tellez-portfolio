import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { name, code_url, live_url, tags, description, image_path, image_alt } = props.project;

  return (
    <div className="ProjectCard">
      <h3>{name}</h3>
      <a href={code_url} target="blank">Code Repo</a>
      <a href={live_url} target="blank">Live Site</a>
      <p>{description}</p>
      <ul>
        {tags.map((tag, i) => {
          return <li key={i}>{tag}</li>
        })}
      </ul>
      <img alt={image_alt} src={require("../../images/" + image_path + ".png")}></img>
    </div>
  );
}

export default ProjectCard;