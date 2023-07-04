import React, { useState } from "react";
import {
  BookContainer,
  Container,
  Inner,
  Inner2,
  LeftContainer,
  OptionBox,
  Page,
  PageOption,
  PageOptions,
  RightContainer,
} from "./ViewerSty";
import { BookPage, PageOptionList } from "./ViewList";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.css";

const ViewerForm = () => {
  const [selectPage, setSelectPage] = useState("양쪽");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  const handlePageOption = (page) => {
    setSelectPage(page);
  };

  return (
    <Container>
      <LeftContainer>
        {selectPage === "모아보기" ? (
          <Inner2>
            {BookPage.map((item) => (
              <Page key={item.src}>
                <img src={item.src} alt="페이지" />
              </Page>
            ))}
          </Inner2>
        ) : (
          <Inner style={{ width: selectPage === "한쪽" ? "555px" : "1110px" }}>
            <Swiper
              spaceBetween={0}
              slidesPerView={selectPage === "양쪽" ? 2 : 1}
              slidesPerGroup={selectPage === "양쪽" ? 2 : 1}
              navigation={true}
              touchRatio={0}
              speed={0}
              onSlideChange={handleSlideChange}
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
        )}
      </LeftContainer>
      <RightContainer>
        <OptionBox>
          <p className="title">페이지 보기</p>
          <PageOptions>
            {PageOptionList.map((page) => (
              <PageOption
                key={page.name}
                onClick={() => handlePageOption(page.name)}
                selected={selectPage === page.name}
              >
                <span class="material-symbols-outlined">{page.span}</span>
                <p>{page.name}</p>
              </PageOption>
            ))}
          </PageOptions>
          <p className="title"> 현재 페이지</p>
          <div className="currentPage">
            {selectPage === "모아보기" ? 8 : activeSlideIndex + 1}&nbsp; /
            &nbsp;
            {BookPage.length}
          </div>
        </OptionBox>
      </RightContainer>
    </Container>
  );
};

export default ViewerForm;
