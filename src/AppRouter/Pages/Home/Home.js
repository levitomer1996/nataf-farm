import React from "react";
import "./Home.css";
import horse_kiss from "../../../Assets/HorseKiss.jpeg";
import AboutParag from "./Comps/AboutParag";
import Swiper from "../../../Components/Carousel/Swiper";
import Margin from "../../../Components/Margin";
import CarouselImages from "./Comps/CarouselImages";

import GMap from "../../../Components/GoogleMap/Map";
const Home = () => {
  return (
    <div className="main">
      <div className="image_div">
        <p className="image_div_title">חוות נטף</p>
        <div className="desc">
          <p className="decs_p">פנסיון סוסים</p>
          <p className="decs_p">
            לימוד רכיבה טיפולית ומערבית על ידי מדריכה מוסמכת עם נסיון רב
          </p>
        </div>
        <p style={{ fontSize: "20px" }}>מושב בית נחמיה</p>
      </div>
      <Margin bottom={10} />

      <AboutParag />
      <Margin bottom={10} />
      <div className="main_cont">
        <GMap />
      </div>
      <Margin bottom={10} />
      <Swiper list={CarouselImages} />
    </div>
  );
};

export default Home;
