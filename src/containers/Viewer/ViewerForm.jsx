import React from "react";
import { BookContainer, Inner } from "./ViewerSty";
import { BookPage } from "./ViewList";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.css";

const ViewerForm = () => {
  return (
    <Inner>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        slidesPerGroup={2}
        navigation={true}
        touchRatio={0}
        className="mySwiper"
      >
        {BookPage.map((page) => (
          <SwiperSlide key={page.src}>
            <BookContainer>
              <img src={page.src} alt="페이지" />
            </BookContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Inner>
  );
};

export default ViewerForm;
