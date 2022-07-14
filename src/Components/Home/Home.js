import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import projects from "../../projects.json";
import Header from "../Nav/Header";
import Footer from "../Nav/Footer";
import FeatureProjectCard from "../Projects/FeatureProjectCard";
import featureImgOne from "../../images/landingPageThumbnail.png";

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
      <Header></Header>
      <main>
        <>
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
              <p id="greeting">good {timeOfDay()}!</p>
              <p id="intro">I'm Mayra Téllez <br/> & I develop the web's <br/> front end.</p>
              <i class="fas fa-chevron-down"></i>
              {/* <img src={require("../../images/landingPageThumbnail.png")} alt="landing page project thumbnail"></img> */}
              {/* <img src={featureImgOne} alt="landing page project thumbnail"></img> */}
            </SwiperSlide>
            {projectList.slice(0, 2).map((project, i) => {
              return (
                <SwiperSlide className="featureProjectSlide" key={i}>
                  <FeatureProjectCard project={project} key={i}></FeatureProjectCard>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
