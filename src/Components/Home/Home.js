import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import projects from "../../projects.json";
import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import FeatureProjectCard from "../Projects/FeatureProjectCard";

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
        <Link className="menu-link" to="/work"><h1 className="menu-item">work</h1></Link>
        <Link className="menu-link" to="/about"><h1 className="menu-item">about</h1></Link>
        <h1 className="menu-item">contact</h1>
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
