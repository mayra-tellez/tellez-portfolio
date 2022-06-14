import { Link } from 'react-router-dom';

import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {

  return (
    <div className="Projects">
      <header>
      <Link to="/">
        <p className="initials">MT</p>
      </Link>
      <nav>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">Resume</a>
      </nav>
      </header>
      <main>

      {/* <ProjectCard></ProjectCard> */}

      </main>
      <footer>
        <p>Get in touch.</p>
        <div>Home page toggle.</div>
      </footer>
    </div>
  );
}

export default Projects;
