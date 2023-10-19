import "./Nav.css";

const Footer = () => {
  
  const timeOfDay = () => {
    const time = new Date().getHours();
  
    if (time >= 0 && time < 12) {
      return "morning";
    } else if (time >= 12 && time < 17) {
      return "afternoon";
    } else if (time >= 17 && time <= 23) {
      return "evening";
    }
  }

  return (
    <footer>
      <div className="footer-message">
        <h1 className="Landing-name">Mayra <br/> Téllez</h1>
        {/* &mdash; -- dash symbol */}
        <p>
         This site is admiringly inspired by the portfolio of <a href="https://fossheim.io/" target="blank" rel="noopener">Sarah L. Fossheim</a>. &mdash; Being that I'm not a UI/UX Designer (although I'm interested to learn), I decided to showcase my skills in mockup-to-reality creation for my portfolio. Some adjustments have been made due to content.
        </p>
      </div>

      {/* emoji stars: &#10024; */}
      {/* html star: &#10036; */}

      <div className="farewell">
        <span>Thank you for visiting.</span>
        <span id="footer-stars">&#10024;</span>
        <span>Have a lovely {timeOfDay()}.</span>
      </div>

      <div className="credits">
        Made by 
        <a href="mayra-tellez.vercel.app">me</a> with 
        <a href="https://react.dev/">React</a>. Deployed on 
        <a href="https://vercel.com/">Vercel</a>.
      </div>

    </footer>
  )
}

export default Footer;