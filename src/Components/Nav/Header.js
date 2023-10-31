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
      </nav>

      <a className="resume-button" href="https://drive.google.com/file/d/1upL8jNltdKqMXG274feqXHGeJfYUuIyX/view?usp=share_link" target="blank"><span id="view">View</span> Resumé</a>
    </header>

  )
}

export default Header;