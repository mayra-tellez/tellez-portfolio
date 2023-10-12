import "./ProjectCard.css";
import projectImgShape from "../../images/showcase.svg"

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

      {/* <svg id="ebUOh6dCG531" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
      >
        <path id="thePath" d="M10.57779,136.19236c0,120.37387,89.66406,78.30737,169.02925,83.97631c25.92878,1.85206,54.61108,21.64222,80.74646,15.61098c10.5251-2.42887,15.56852-25.17316,18.30253-33.3752c11.0118-33.0354,11.08448-76.68353,5.3831-110.8918-7.19831-43.18982-70.54092-24.837-102.27884-29.06872C154.21705,58.7715,68.36357,39.39046,43.4147,48.98619C13.82133,60.36826,10.57779,122.591429,10.57779,149.999999" transform="matrix(.996564-.082828 0.082828 0.996564-11.225499 12.798644)" fill="none" strokeWidth="0.6"/>

        <clipPath id="cp">
          <use href="#thePath" />
        </clipPath>

        <image clip-path="url(#cp)" href={require("../../images/" + image_path + ".png")} width="300" x="10" y="55" />
      </svg> */}
      
      {/* <p>Featured Project &#10036;</p> */}
      <section className="img-name-links-group">

        <div className="img-overlay-pair">
          <div className="img-overlay"></div>
          <img alt={image_alt} src={require("../../images/" + image_path + ".png")}></img>      
        </div>

        <div className="name-links-group">
          <h3 className="project-name">{name}</h3>

          <div className="links-container">
            <div className="link-and-arrow-pair">
              <a className="link" href={code_url} target="blank">See Code</a>
              {/* <span className="arrow">&#8599;</span> */}
            </div>

            <div className="link-and-arrow-pair">
              <a className="link" href={live_url} target="blank">Visit Site</a>
              {/* <span className="arrow">&#8599;</span> */}
            </div>
          </div>
        </div>

      </section>

      <p className="project-description">{description}</p>

      <ul className="tags-list">
        {tags.map((tag, i) => {
          // let lowercaseTag = tag.toLowerCase();
          return <li className="tag" key={i}>{tag}</li>
        })}
      </ul>

    </div>
  );
}

export default ProjectCard;