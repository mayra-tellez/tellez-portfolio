import "./FeatureProjectCard.css";

const FeatureProjectCard = (props) => {
  const { name, code_url, live_url, tags, description, image_path, image_alt } = props.project;

  return (
    <div className="FeatureProjectCard">
      <img alt={image_alt} src={require("../../images/" + image_path + ".png")}></img>
      <div className="featureProjectInfo">
        <h3>{name}</h3>
        <div className="links">
          <a href={code_url} target="blank">Code Repo</a>
          <a href={live_url} target="blank">Live Site</a>
        </div>
        <p>{description}</p>
        <ul>
          {tags.map((tag, i) => {
            return <li key={i}>{tag}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default FeatureProjectCard;