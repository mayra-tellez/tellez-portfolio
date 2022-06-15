import "./FeatureProjectCard.css";

const FeatureProjectCard = (props) => {
  const { name, code_url, live_url, tags, description, image } = props.project;

  return (
    <div className="FeatureProjectCard">
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
}

export default FeatureProjectCard;