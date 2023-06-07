import React from "react";
import {
  BannerContainer,
  Book,
  Box,
  BoxContainer,
  Boxes,
  Inner,
  MoreBtn,
} from "./VariousSty";
import { VariousItem } from "./VariousList";
import { Title } from "../MRoad/MRoadSty";

const Various = () => {
  return (
    <BannerContainer>
      <Inner>
        <Title>
          <p>에디터가 엄선한 이번 주 베스트셀러를 만나보세요</p>
        </Title>
        <Boxes>
          {VariousItem.map((item) => (
            <BoxContainer key={item.title}>
              <Box>
                <div
                  className="blur"
                  style={{
                    backgroundImage: `url(${item.src})`,
                  }}
                />
                <img src={item.src} alt={item.title} />
              </Box>
              <Book>
                <div className="title">{item.title}</div>
                <div className="writer">{item.writer}</div>
              </Book>
            </BoxContainer>
          ))}
        </Boxes>
        <MoreBtn>
          <span class="material-symbols-outlined">refresh</span>
          <p>더 많이 발견하기</p>
        </MoreBtn>
      </Inner>
    </BannerContainer>
  );
};

export default Various;
