import projects from "../../projects.json";
import Header from '../Nav/Header';
import Footer from '../Nav/Footer';
// import ProjectCard from './ProjectCard';

import './Projects.css';

const Projects = () => {
  const projectList = projects.projects;

  return (
    <div className="Projects">
      {/* <Header></Header>
      <main>
        <section className="projectsContainer">
          {projectList.map((project, i) => {
            return (
              <ProjectCard project={project} key={i}></ProjectCard>
            )
          })}
        </section>
      </main>
      <Footer></Footer> */}
    </div>
  );
}

export default Projects;
