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
        <p>
          *This website is admiringly inspired by the portfolio of <a href="https://fossheim.io/">Sarah L. Fossheim</a>. &mdash; Although I'm interested in learning, I'm not a UX/UI Designer by trade. So when it came to my personal portfolio, I decided to showcase my skills in mockup-to-reality creation instead. I found a site that I felt was relevant to my experience and personality and used it as a wireframe for my own site, only making adjustments due to content. Please enjoy and as always, feedback is appreciated!
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