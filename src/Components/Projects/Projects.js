import projects from "../../projects.json";
import Header from '../Nav/Header';
import Footer from '../Nav/Footer';
import FeatureProjectCard from './FeatureProjectCard';

import './Projects.css';

const Projects = () => {
  const projectList = projects.projects;

  return (
    <div className="Projects">
      <Header></Header>
      <main>
        <section className="projectsContainer">
          {projectList.map((project, i) => {
            return (
              <p>Featured Project Card</p>
              // <FeatureProjectCard project={project} key={i}></FeatureProjectCard>
            )
          })}
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Projects;
