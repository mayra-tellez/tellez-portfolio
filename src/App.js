import ProjectCard from './Components/ProjectCard';
import './App.css';

function App() {

  const timeOfDay = () => {
    const today = new Date();
    const time = today.getHours();
  
    if (time >= 0 && time < 12) {
      return "morning";
    } else if (time >= 12 && time < 17) {
      return "afternoon";
    } else if (time >= 17 && time <= 23) {
      return "evening";
    }
  }

  return (
    <div className="App">
      <header>
        <p>Mayra Téllez</p>
        <p>Based in Austin, TX</p>
        <p>Currently a Software Developer at Zollege</p>
        <nav>
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Resume</a>
        </nav>
      </header>
      <main>
        <h3>Thanks for stopping by!</h3>
        <a href="">View my work</a>
      </main>
      <footer>
        <p>Enjoy your {timeOfDay()}!</p>
        <p>Get in touch.</p>
        <div>Home page toggle.</div>
      </footer>
      <ProjectCard></ProjectCard>
    </div>
  );
}

export default App;
