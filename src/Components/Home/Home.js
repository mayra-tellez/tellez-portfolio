import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

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
    <div className="Home">
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
        <p className="greeting">good {timeOfDay()}!</p>
        <p>I'm Mayra Téllez <br/> & I develop the web's <br/> front end.</p>
        <i class="fas fa-chevron-down"></i>
      </main>
      <footer>
        <p>Get in touch.</p>
        <div>Home page toggle.</div>
      </footer>
    </div>
  );
}

export default Home;
