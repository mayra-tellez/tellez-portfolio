import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import './Home.css';

const Home = () => {

  const timeOfDay = () => {
    const today = new Date();
    const time = today.getHours();
  
    if (time >= 0 && time < 12) {
      return "morning";
    } else if (time >= 12 && time < 17) {
      return "afternoon";
    } else if (time >= 17 && time <= 23) {
      return "evening";
    }
  }

  return (
    <div className="Home">
      <Header></Header>
      <main>
        <p className="greeting">good {timeOfDay()}!</p>
        <p>I'm Mayra Téllez <br/> & I develop the web's <br/> front end.</p>
        <i class="fas fa-chevron-down"></i>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
