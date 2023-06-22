import React, { useEffect, useState } from "react";
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
import apiServer from "../../../api/api";
import { Link } from "react-router-dom";

const Various = () => {
  const [bookItems, setBookItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // 책 정보 가져오기
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiServer}/bookinfo/books`);
      const data = response.data;
      console.log(data);
      const randomItems = getRandomItems(data, 3);
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
        <Boxes>
          {bookItems.map((item) => (
            <BoxContainer key={item.title}>
              <Link to={`/bookDetail/${item.idx}`}>
                <Box>
                  <div
                    className="blur"
                    style={{
                      backgroundImage: `url(${item.thumbnail})`,
                    }}
                  />
                  <img src={item.thumbnail} alt={item.title} />
                </Box>
              </Link>
              <Book>
                <div className="title">{item.title}</div>
                <div className="writer">{item.authors}</div>
              </Book>
            </BoxContainer>
          ))}
        </Boxes>
        <MoreBtn onClick={handleRefresh}>
          <span class="material-symbols-outlined">refresh</span>
          <p>더 많이 발견하기</p>
        </MoreBtn>
      </Inner>
    </BannerContainer>
  );
};

export default Various;
