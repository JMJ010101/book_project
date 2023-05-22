import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "./swiper.css";

import Book1 from "../images/books/노르웨이의숲.jpg";
import Book2 from "../images/books/달러구트꿈백화점.jpg";
import Book3 from "../images/books/데미안.jpg";
import Book4 from "../images/books/멋진신세계.jpg";
import Book5 from "../images/books/어린왕자.jpg";
import Book6 from "../images/books/인간실격.jpg";

export const BooksContainer = styled.div`
  width: 100%;
  background-color: white;
`;

export const Inner = styled.div`
  width: 97%;
  height: 700px;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 230px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  .text1 {
    height: 50%;
    font-size: 70px;
    font-weight: 500;
    color: #333;
  }
  .text2 {
    height: 50%;
    font-size: 25px;
    color: #333;
  }
`;

export const ImageBox = styled.div`
  height: 390px;
`;

export const Img = styled.img`
  width: 130px;
  height: 180px;
`;

const Books = () => {
  return (
    <BooksContainer>
      <Inner>
        <TextBox>
          <div className="text1">text1</div>
          <div className="text2">text2@@@@@@@@</div>
        </TextBox>
        <ImageBox>
          <Swiper
            spaceBetween={50}
            slidesPerView="auto"
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            centeredSlides="true"
            loop="true"
            loopedSlides="1"
            loopAdditionalSlides="1"
          >
            <SwiperSlide>
              <Img src={Book1} alt="노르웨이의 숲" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book2} alt="달러구트 꿈 백화점" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book3} alt="데미안" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book4} alt="멋진 신세계" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book5} alt="어린왕자" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book6} alt="인간실격" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book1} alt="노르웨이의 숲" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book2} alt="달러구트 꿈 백화점" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book3} alt="데미안" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book4} alt="멋진 신세계" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book5} alt="어린왕자" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={Book6} alt="인간실격" />
            </SwiperSlide>
          </Swiper>
        </ImageBox>
      </Inner>
    </BooksContainer>
  );
};

export default Books;
