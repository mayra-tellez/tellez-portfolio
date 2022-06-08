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
      {/* <div className='shelf-container'>
        <div className='books'>
          <div className='bookOne'></div>
          <div className='bookTwo'></div>
        </div>
        <div className='plant'></div>
        <div className='shelf'></div>
      </div>
      <div className='computer'></div>
      <div className='desk'></div> */}
      <header>
        <p className="initials">MT</p>
        <nav>
          <a href="" target="blank">About</a>
          <a href="" target="blank">Projects</a>
          <a href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">Resume</a>
        </nav>
      </header>
      <main>
        <p className="greeting">good {timeOfDay()}!</p>
        <p>I'm Mayra Téllez <br/> & I develop the web's <br/> front end.</p>
        <i class="fas fa-chevron-down"></i>
      </main>
      <footer>
        <p>Get in touch.</p>
        <div>Home page toggle.</div>
      </footer>
      {/* <div className="folder"></div> */}
      {/* <ProjectCard></ProjectCard> */}
      {/* <span className="greeting">good {timeOfDay()}</span> */}
    </div>
  );
}

export default App;
