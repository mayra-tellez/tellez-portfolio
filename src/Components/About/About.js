import projects from "../../projects.json";
import "./About.css";

const About = () => {
  const technologiesList = projects.technologies;

  return (
    <div id="About" className="About">
      <main>
        <h2>About Me</h2>

        <p>
          Hi! I'm Mayra* and I work as a front end web developer. I enjoy building products that solve real problems and making the web easy to use for all. 
        </p>
        <p>
          Currently, I'm a teacher assistant and tutor at Austin Coding Academy, where I help students learn the fundamentals of full stack programming. This includes support in education and debugging for all course levels. I also work on a freelance basis and continuously learn to improve my skillset. 
        </p>
        <p>
          Previously, I was involved in the nonprofit and client services industries, where I focused on the development of online presence and messaging. I enjoy helping others and volunteer my services when possible.
        </p>

        <p>*In case you're curious, my name is pronounced MY-dah &#9786;</p>

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
      </article>

    </div>
  )
}

export default About;