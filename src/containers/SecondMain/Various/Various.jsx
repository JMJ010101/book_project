import React, { useEffect, useRef, useState } from "react";
import {
  BannerContainer,
  Book,
  Box,
  BoxContainer,
  Boxes,
  Inner,
  MoreBtn,
} from "./VariousSty";
import { Title } from "../MRoad/MRoadSty";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getApiKey from "../../../api/restApi";

const Various = () => {
  const [bookItems, setBookItems] = useState([]);
  const restApi = getApiKey();
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    if (e.target.classList.contains("box")) {
      e.preventDefault();
      return;
    }
    setStartX(e.pageX);
    setStartScrollLeft(containerRef.current.scrollLeft);
    setIsDragging(true);
    containerRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const distance = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.classList.remove("dragging");
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 책 정보 가져오기
  const keywords = [
    "1",
    "2",
    "3",
    "나",
    "친구",
    "바다",
    "하늘",
    "수달",
    "우리",
    "이",
    "원피스",
    "코난",
  ];

  const fetchData = async () => {
    try {
      const randomKeyword =
        keywords[Math.floor(Math.random() * keywords.length)];
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book?&query=${randomKeyword}`,
        {
          headers: {
            Authorization: `KakaoAK ${restApi}`,
          },
        }
      );
      const data = response.data.documents;
      const randomItems = getRandomItems(data, 5);
      setBookItems(randomItems);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomItems = (array, count) => {
    const shuffled = array.slice(); // Make a shallow copy of the array
    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // Swap it with the current element
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    return shuffled.slice(0, count);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <BannerContainer>
      <Inner>
        <Title>
          <p>에디터가 엄선한 이번 주 베스트셀러를 만나보세요</p>
        </Title>
        <Boxes
          ref={containerRef}
          onMouseDown={handleMouseDown} //마우스 누른 상태
          onMouseMove={handleMouseMove} //마우스 뗀 상태
          onMouseUp={handleMouseUp} //마우스 움직이는 상태
        >
          {bookItems.map((item) => (
            <BoxContainer key={item.title}>
              <Box
                onClick={() =>
                  navigate(
                    `/bookDetail/${encodeURIComponent(item.isbn.split(" ")[0])}`
                  )
                }
              >
                <div
                  className="blur"
                  style={{
                    backgroundImage: `url(${item.thumbnail})`,
                  }}
                />
                <img src={item.thumbnail} alt={item.title} />
              </Box>
              <Book>
                <div className="title">{item.title}</div>
                <div className="writer">{item.authors}</div>
              </Book>
            </BoxContainer>
          ))}
        </Boxes>
        <MoreBtn onClick={handleRefresh}>
          <span className="material-symbols-outlined">refresh</span>
          <p>더 많이 발견하기</p>
        </MoreBtn>
      </Inner>
    </BannerContainer>
  );
};

export default Various;
