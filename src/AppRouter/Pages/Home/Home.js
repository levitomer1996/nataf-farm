import React from "react";
import "./Home.css";
import horse_kiss from "../../../Assets/HorseKiss.jpeg";
import AboutParag from "./Comps/AboutParag";
import Swiper from "../../../Components/Carousel/Swiper";
import Margin from "../../../Components/Margin";
import CarouselImages from "./Comps/CarouselImages";

import Map from "../../../Components/GoogleMap/Map";
const Home = () => {
  return (
    <div className="main">
      <div className="image_div">
        <p>חוות נטף</p>
        <p style={{ fontSize: "20px" }}>מושב בית נחמיה</p>
      </div>
      <Margin bottom={10} />
      <AboutParag />
      <Margin bottom={10} />

      <Swiper list={CarouselImages} />
    </div>
  );
};

export default Home;
