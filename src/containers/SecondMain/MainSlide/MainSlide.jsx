import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Boxes,
  ContainerBlur,
  ImgBox,
  MoveDiv,
  SlideContainer,
  SlideContainer2,
  SlideImg,
  TextBox,
} from "./MainSlideSty";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper-bundle.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

const MainSlide = () => {
  const [moveBar1Width, setMoveBar1Width] = useState("1px");
  const [changePlay, setChangePlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMoveBar1Width("100%");
    });
  }, []);

  const ClickIcon = () => {
    setChangePlay(!changePlay);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
        // style={{ overflow: "visible" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContainer>
            <ContainerBlur></ContainerBlur>
            <SlideImg></SlideImg>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer>
            <ContainerBlur></ContainerBlur>
            <SlideImg></SlideImg>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>

      <SlideContainer2>
        <Boxes>
          <ImgBox>
            <img
              src="https://d2j6uvfek9vas1.cloudfront.net/hero_banner/6476aeb1dec44.jpg"
              alt="서울국제도서전"
            />
          </ImgBox>
          <TextBox>
            <div className="badge">
              <span>EVENT</span>
            </div>
            <div className="text">
              <p>
                2023 서울국제도서전
                <br /> 회원 여러분을 초대합니다
              </p>
            </div>
            <MoveDiv>
              <div className="moveBar">
                <div
                  className="moveBar1"
                  style={{
                    width: moveBar1Width,
                    transition: "width 5s linear",
                  }}
                />
                <div className="moveBar2" />
              </div>
              <div className="number">1/4</div>
              <div className="icon" onClick={ClickIcon} />
              <span class="material-icons" onClick={ClickIcon}>
                {changePlay ? "play_arrow" : "pause"}
              </span>
            </MoveDiv>
          </TextBox>
        </Boxes>
      </SlideContainer2>
    </>
  );
};

export default MainSlide;
