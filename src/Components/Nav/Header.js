import { Link } from "react-router-dom";
import "./Nav.css";

const Header = () => {

  const navigateClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector("#Contact").offsetTop,
      behavior: "smooth"
    })
  }

  return (

    <header>
      <nav>
        <div className="nav-box">
          <Link className="nav-link" to="/">
            <p className="nav-item">Home</p>
          </Link>
        </div>
        
        <div id="contact" className="nav-box">
          <Link className="nav-link" to="" onClick={(e) => navigateClick(e)}>
            <p className="nav-item">Contact</p>
          </Link>
        </div>
  
        <a className="resume-button" href="https://drive.google.com/file/d/1vAZyX0yrAoDjYfCsDrFaVPD0-HkelOV5/view?usp=sharing"><span id="view">View</span> Resumé</a>
      </nav>
    </header>

  )
}

export default Header;