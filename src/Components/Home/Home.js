import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import projects from "../../projects.json";
import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import FeatureProjectCard from "../Projects/FeatureProjectCard";
import greenBlob from "../../images/greenBlob.svg";
import orangeBlob from "../../images/orangeBlob.svg";
import purpleBlob from "../../images/purpleBlob.svg";

import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

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

  const projectList = projects.projects;

  return (
    <div className="Home">
      {/* <Header></Header> */}
      <main>
        {/* <h1 className="page-title left">Hello dere</h1> */}
        <section className="menu-section">
          <div id="menu-column-one">
            <img className="blob" src={greenBlob} alt="green blob"/>
            <Link className="menu-link" to="/work">
              <h1 className="menu-item right">work</h1>
            </Link>
          </div>
          <div id="menu-column-two">
            <img className="blob" src={orangeBlob} alt="orange blob"/>
            <Link className="menu-link" to="/about">
              <h1 className="menu-item center">about</h1>
            </Link>
          </div>
          <div id="menu-column-three">
            <img className="blob" src={purpleBlob} alt="purple blob"/>
            <Link className="menu-link" to="/contact">
              <h1 className="menu-item">contact</h1>
            </Link>
          </div>
        </section>
        {/* <>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            mousewheel={true}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <section id="firstSlide-home">
                <p id="greeting">good {timeOfDay()}!</p>
                <p id="intro">I'm Mayra Téllez <br/> & I develop the web's <br/> front end.</p>
                <i class="fa-solid fa-angle-down"></i>
              </section>
            </SwiperSlide>
            {projectList.slice(0, 2).map((project, i) => {
              return (
                <SwiperSlide className="featureProjectSlide" key={i}>
                  <FeatureProjectCard project={project} key={i}></FeatureProjectCard>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </> */}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Home;
