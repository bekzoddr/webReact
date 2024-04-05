import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cardimg1 from "../../assets/images/card1.jpg";
import cardimg2 from "../../assets/images/card2.jpg";
import cardimg3 from "../../assets/images/card3.jpg";
import cardimg4 from "../../assets/images/card4.jpg";
import cardimg5 from "../../assets/images/card5.webp";
import cardimg6 from "../../assets/images/card10.jpg";
import cardimg7 from "../../assets/images/card6.png";
import cardimg8 from "../../assets/images/card7.png";
import cardimg9 from "../../assets/images/card9.jpg";
import cardimg10 from "../../assets/images/card10.jpg";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="hero container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={cardimg1} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg2} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg3} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg4} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg5} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg6} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg7} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg8} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardimg9} alt="image" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
