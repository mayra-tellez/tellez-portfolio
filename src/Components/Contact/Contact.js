import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <Link className="navToHome-link" to="/">back to <span id="home">home</span></Link>
      <section className="contact-main">
        <h1 className="page-title">contact</h1>
        <p className="contact-info"><span className="contact-method">Email --</span> mayranicoletellez@gmail.com</p>
        <div className="contact-info"><span className="contact-method">Social --</span> 
          <div className="socials-container socials-container-one">
            <a className="socials social-one" href="https://www.linkedin.com/in/mayra-tellez/" target="blank">LinkedIn</a>
            <span className="arrow arrow-one">&#8599;</span>
          </div>
          <div className="socials-container">
            <a className="socials" href="https://github.com/mayra-tellez" target="blank">Github</a>            
            <span className="arrow">&#8599;</span>
          </div>
        </div>
        <div className="signoff-container">
          <p className="signoff">talk soon!</p>
          {/* <p className="signoff">this is everything for now. talk soon!</p> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;