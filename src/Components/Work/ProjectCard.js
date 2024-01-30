import "./ProjectCard.css";
import projectImgShape from "../../images/showcase.svg"
import sunburst from "../../images/sunburst.png"

const ProjectCard = (props) => {
  const { name, code_url, live_url, tags, description, image_path, image_alt } = props.project;

  let backgroundColors = [
    "#f9e083", //yellow
    "#adecb3", //green
    "#fbf5e9", //tan
    "#a2d7e7", //blue
    "#ffb68d"  //orange 
  ]

  return (
    <div className="ProjectCard" 
      data-project-name={name} 
      data-project-image-path={image_path} data-project-image-alt={image_alt}
    >
      
      <section className="img-name-links-group">

        <div className="img-overlay-pair">
          <div className="img-overlay"></div>
          <img alt={image_alt} src={require("../../images/" + image_path + ".png")}></img>      
        </div>

        <div className="name-links-group">
          <h3 className="project-name">{name}</h3>

          <div className="links-container">
            {
              code_url ? 
              <div className="link-and-arrow-pair">
                <a className="link" href={code_url} target="blank">See Code</a>
                {/* <span className="arrow">&#8599;</span> */}
              </div> :
              null
            }

            {
              live_url ? 
              <div className="link-and-arrow-pair">
                <a className="link" href={live_url} target="blank">Visit Site</a>
                {/* <span className="arrow">&#8599;</span> */}
              </div> :
              null
            }

            {
              !live_url &&
              <div className="link-and-arrow-pair">
                <a className="link" href="https://knowbility.org/programs/air" target="blank">More Info</a>
                {/* <span className="arrow">&#8599;</span> */}
              </div>
            }
          </div>
        </div>

      </section>

      <p className="project-description">{description}</p>

      <ul className="tags-list">
        {tags.map((tag, i) => {
          return <li className="tag" key={i}>{tag}</li>
        })}
      </ul>
      
      {
        !code_url &&
        <div className="sun-plus-text-container">
          <div className="sun-plus-text">
            <img id="sunburst" alt="" src={sunburst}></img>
            <p>Ask me about AIR!</p>
          </div>
        </div>
      }

    </div>
  );
}

export default ProjectCard;