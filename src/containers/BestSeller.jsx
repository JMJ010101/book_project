import React from "react";
import { styled } from "styled-components";
import BestBooks from "../components/BestSeller/BestBooks";

import Book1 from "../images/books/노르웨이의숲.jpg";
import Book2 from "../images/books/달러구트꿈백화점.jpg";
import Book3 from "../images/books/데미안.jpg";
import Book4 from "../images/books/멋진신세계.jpg";
import Book5 from "../images/books/어린왕자.jpg";
import Book6 from "../images/books/인간실격.jpg";
import Interest from "../components/BestSeller/Interest";

export const BookItem = [
  {
    name: "지금 서점 베스트 셀러",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
        writer: "무라카미 하루키",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
        writer: "이미예",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
        writer: "헤르만 헤세",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
        writer: "올더스 헉슬리",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
        writer: "앙투안 드 생텍쥐페리",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
        writer: "다자이 오사무",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
        writer: "무라카미 하루키",
      },
    ],
  },

  {
    name: "한 달 이내 출간된 책",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },

  {
    name: "오디오북 BEST",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },

  {
    name: "독점 소설",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },
];

export const BookItem2 = [
  {
    name: "동물",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
        writer: "무라카미 하루키",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
        writer: "이미예",
      },
    ],
  },
  {
    name: "영어",
    contents: [
      {
        src: Book3,
        alt: "a",
        text: "데미안",
        writer: "헤르만 헤세",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
        writer: "올더스 헉슬리",
      },
    ],
  },
  {
    name: "음식",
    contents: [
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
    ],
  },
  {
    name: "다이어트",
    contents: [
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
    ],
  },
];

const BestSellerContainer = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 1100px;
  height: 2800px;
  margin: 0 auto;
`;

const TextBox = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;

  .text1 {
    height: 50%;
    font-size: 50px;
    font-weight: 600;
    color: #333;
    p {
      margin-bottom: 8px;
    }
  }
  .text2 {
    height: 50%;
    font-size: 23px;
    color: #767676;
    p {
      margin-bottom: 8px;
    }
  }
`;

const BestSeller = () => {
  return (
    <BestSellerContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>모든 책이 무제한</p>
            <p>9,900원</p>
          </div>
          <div className="text2">
            <p>10년치 베스트셀러</p>
            <p>신간 오디오북 장르 소설까지</p>
          </div>
        </TextBox>
        <BestBooks />
        <TextBox>
          <div className="text1">
            <p>관심 분야에 있는 책도</p>
            <p>딱 골라드려요</p>
          </div>
          <div className="text2">
            <p>검색어 순위를 통해 뽑은</p>
            <p>인기 분야 책들을 확인해보세요</p>
          </div>
        </TextBox>
        <Interest />
      </Inner>
    </BestSellerContainer>
  );
};

export default BestSeller;
