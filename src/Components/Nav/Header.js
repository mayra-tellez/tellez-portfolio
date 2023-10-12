import { Link } from "react-router-dom";
import "./Nav.css";

const Header = () => {
  return (
    // <header>
    // <Link to="/" className="link">
    //   <h3 className="initials">
    //     <span id="M">M</span>
    //     <span id="T">T</span>
    //   </h3>
    // </Link>
    // <nav>
    //   <Link to="/projects">Projects</Link>
    //   <Link to="/about">About</Link>
    //   <a href="https://drive.google.com/file/d/16DrnpUuT90FjTkEQad46STrS7eqSbZ_7/view?export/pdf" target="blank">Resume</a>
    // </nav>
    // </header>

    <header>
      {/* <div id="name">
        <span id="name-star">&#10036;</span> m.téllez
      </div> */}

      <nav>
        <div id="about" className="nav-box">
          <Link className="nav-link" to="/about">
            <p className="nav-item">About</p>
          </Link>
        </div>

        <div id="work" className="nav-box">
          <Link className="nav-link" to="/work">
            <p className="nav-item">Portfolio</p>
          </Link>
        </div>
        
        <div id="contact" className="nav-box">
          <Link className="nav-link" to="/contact">
            <p className="nav-item">Contact</p>
          </Link>
        </div>
      </nav>

      <a className="resume-button" href="https://drive.google.com/file/d/1AA9lmokmj0ef8SqMpCPGbHkLJZgX-tjj/view?usp=sharing" target="blank">View Resumé <span id="resume-arrow-icon">&#8599;</span></a>

        {/* <button className="resume-button"> */}
    </header>

  )
}

export default Header;