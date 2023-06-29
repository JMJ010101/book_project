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
import "./swiper-bundle.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { slideComment, slideImages } from "./MainSlideList";

SwiperCore.use([Navigation, Autoplay]);

const MainSlide = () => {
  const [moveBar1Width, setMoveBar1Width] = useState("1px");
  const [changePlay, setChangePlay] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMoveBar1Width("100%");
    }, 500);
  }, []);

  const ClickIcon = () => {
    setChangePlay(!changePlay);
  };

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  useEffect(() => {
    setMoveBar1Width("1px");
    setTimeout(() => {
      setMoveBar1Width("100%");
    }, 500);
  }, [activeSlideIndex]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 6000 }}
        modules={[Autoplay]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {slideImages.map((img) => (
          <SwiperSlide>
            <SlideContainer>
              <ContainerBlur
                style={{
                  backgroundImage: `url('${img}')`,
                }}
              ></ContainerBlur>
              <SlideImg></SlideImg>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideContainer2>
        <Boxes>
          <ImgBox>
            <img src={slideImages[activeSlideIndex]} alt="슬라이드 이미지" />
          </ImgBox>
          <TextBox>
            <div className="badge">
              <span>EVENT</span>
            </div>
            <div className="text">
              <p
                dangerouslySetInnerHTML={{
                  __html: slideComment[activeSlideIndex],
                }}
              />
            </div>
            <MoveDiv>
              <div className="moveBar">
                <div
                  className="moveBar1"
                  style={{
                    width: moveBar1Width,
                    transition:
                      moveBar1Width === "100%"
                        ? "width 5s linear"
                        : "width 0s linear",
                  }}
                />
                <div className="moveBar2" />
              </div>
              <div className="number">
                {activeSlideIndex + 1}/{slideImages.length}
              </div>
              {/* <div className="icon" onClick={ClickIcon} />
              <span className="material-icons" onClick={ClickIcon}>
                {changePlay ? "play_arrow" : "pause"}
              </span> */}
            </MoveDiv>
          </TextBox>
        </Boxes>
      </SlideContainer2>
    </>
  );
};

export default MainSlide;
