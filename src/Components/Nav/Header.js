import { Link } from "react-router-dom";
import "./Nav.css";

const Header = () => {
  return (
    <header>
    <Link to="/" className="link">
      <p className="initials">MT</p>
    </Link>
    <nav>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <a href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">Resume</a>
    </nav>
    </header>
  )
}

export default Header;