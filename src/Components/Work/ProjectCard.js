import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { name, code_url, live_url, tags, description, image_path, image_alt } = props.project;

  return (
    <div className="ProjectCard" 
      data-project-name={name} 
      data-project-image-path={image_path} data-project-image-alt={image_alt}
    >

      <h3 className="project-name">{name}</h3>
      <img alt={image_alt} src={require("../../images/" + image_path + ".png")}></img>
      <p className="project-description">{description}</p>

      <div className="tags-and-links-container">
        <ul>
          {tags.map((tag, i) => {
            let lowercaseTag = tag.toLowerCase();
            return <li className="tag" key={i}>{lowercaseTag}</li>
          })}
        </ul>

        <div className="links-container">
          <div className="link-and-arrow-container">
            <a className="link" href={code_url} target="blank">Code Repo</a>
            <span className="arrow">&#8599;</span>
          </div>

          <div className="link-and-arrow-container">
            <a className="link" href={live_url} target="blank">Live Site</a>
            <span className="arrow">&#8599;</span>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default ProjectCard;