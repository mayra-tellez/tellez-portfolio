import { Link } from "react-router-dom";
import projects from "../../projects.json";

import "./About.css";

const About = () => {
  const technologiesList = projects.technologies;

  return (
    <div className="About">
      <main>
        <h2>About Me</h2>

        <p>
          Hi! I'm Mayra (pronounced MY-dah, if you're curious &#9786;), and I work as a front-end web developer and educator. I enjoy building products that solve real world problems, like making the web easy to use for all. 
        </p>
        <p>
          Currently, I'm a teacher assistant and tutor at Austin Coding Academy, where I help students learn the fundamentals of full-stack programming. I also work on a freelance basis and continuously learn by staying up to date with the latest technologies.    
        </p>
        <p>
          Previously, I've been involved in the nonprofit and client services industries as I've always had a desire to help others.
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

      <article className="about-article">
        <p>hello</p>
        <br />
        <br />
        Software Engineer located in Austin, TX.  
        <br />
        <br />
        let's try to make this look longer puh lease. 
        <br />
        <br />
        help this is kind of short lorem ipsum html non word gibberish world heheheh.
      </article>

      {/* <img className="About-img" src={profilePic} alt="Mayra Tellez" /> */}

    </div>
  )
}

export default About;