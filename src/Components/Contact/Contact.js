import { Link } from "react-router-dom";

import purpleBlob from "../../images/purpleBlob.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>

      <div className="signoff-container">
        <p className="signoff">Email or message me anytime. Talk soon!</p>
      </div>

      <div className="grand-info-container">
        <div className="info-container info-container-one">
          <p className="contact-method">Email</p>
          <div className="email-container">
            <div className="email">mayranicoletellez@gmail.com</div>
          </div>
        </div>

        <div className="info-container info-container-two">
          <p className="contact-method">Social</p> 
          <div className="socials-container">
            <span className="social-with-arrow">
              <a className="social" href="https://www.linkedin.com/in/mayra-tellez/" target="blank">
                LinkedIn
              </a>
              <span className="arrow">&#8599;</span>
            </span>

            <span className="social-with-arrow">
              <a className="social" href="https://github.com/mayra-tellez" target="blank">Github</a>            
              <span className="arrow">&#8599;</span>
            </span>
          </div>
        </div>
      </div>

      <h1 className="page-title">contact</h1>

      <img className="blob" src={purpleBlob} alt="purple blob"/>

    </div>
  );
}

export default Contact;