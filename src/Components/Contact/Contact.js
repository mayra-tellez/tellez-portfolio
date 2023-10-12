import { Link } from "react-router-dom";

import purpleBlob from "../../images/purpleBlob.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Get in Touch</h2>
      <p>My inbox is always open for questions or ideas!</p>

      <section>

        <article>
          {/* <h3>Email</h3> */}
          <p>mayranicoletellez@gmail.com</p>
        </article>

        <article>
          {/* <h3>Connect</h3> */}
          <div className="socials">
            <a href="https://github.com/mayra-tellez" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mayra-tellez/" target="_blank" rel="noreferrer">LinkedIn</a>
            {/* <a href="https://codepen.io/mayra-tellez-the-encoder" target="_blank" rel="noreferrer">Codepen</a> */}
          </div>
        </article>

      </section>

      {/* <button>Say Hello</button> */}

      {/* <div className="socials">
        <h1 className="Landing-name">Mayra <br/> Téllez</h1>
      </div> */}


    </div>
  );
}

export default Contact;