import projects from "../../projects.json";
import "./About.css";

const About = () => {
  const technologiesList = projects.technologies;

  return (
    <div id="About" className="About">
      <main>
        <h2>About Me</h2>

        <p>
          Hi! I'm Mayra and I work as a web developer with a focus on the front end. My passion for coding comes from being able to make a difference in peoples' lives.
        </p>
        <p>
          Currently, I'm a teacher assistant and tutor at Austin Coding Academy, where I help students learn the fundamentals of full stack programming. This includes support in education and debugging for all course levels.
        </p>
        <p>
          Previously, I was involved in the nonprofit and client services industries, where I focused on the development of online presence and messaging. I continuously try to make a difference, help others and improve my skillset when possible!
        </p>

        <h2>Technologies</h2>
        <ul>
          {technologiesList.map((tech, i) => {
            return (
              <li key={i}>{tech}</li>
            )
          })}
        </ul>
      </main>

      <article>
        <p>&#128075; howdy</p>
        <br />
        I'm an independent Software Engineer located in Austin, Texas. 
        <br /> 
        <br /> 
        I study, teach, and code the web.
        <br /> 
        <br /> 
        <p>&#128187;</p>
      </article>

    </div>
  )
}

export default About;