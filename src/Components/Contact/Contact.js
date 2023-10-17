import { Link, useLocation } from "react-router-dom";

import purpleBlob from "../../images/purpleBlob.svg";
import "./Contact.css";

const Contact = () => {

  return (
    <div id="Contact" className="Contact">
      <h2>Get in Touch</h2>
      <p>My inbox is always open for questions, ideas or project proposals.</p>

      <section>

        <article>
          <h3>Copy Email</h3>
          <p>mayranicoletellez@gmail.com</p>
        </article>

        <article>
          <h3>Click to Connect</h3>
          <div className="socials">
            <a href="https://github.com/mayra-tellez">
              GitHub 
              <i class="fa-brands fa-github fa-xl"></i>          
            </a>
            <a href="https://www.linkedin.com/in/mayra-tellez/">
              LinkedIn 
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </div>
        </article>

      </section>
    </div>
  );
}

export default Contact;