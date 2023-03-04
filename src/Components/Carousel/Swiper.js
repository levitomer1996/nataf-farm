// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
export default ({ list }) => {
  return (
    <>
      <div className="swiper_container">
        <Swiper spaceBetween={20} slidesPerView={4}>
          {list.map((i) => {
            return (
              <SwiperSlide>
                <img style={{ width: "250px", height: "250px" }} src={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mobile_swiper_container">
        <Swiper spaceBetween={20} slidesPerView={2}>
          {list.map((i) => {
            return (
              <SwiperSlide>
                <img style={{ width: "200px", height: "200px" }} src={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
