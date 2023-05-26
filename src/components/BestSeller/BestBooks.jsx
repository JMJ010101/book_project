import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { BookItem } from "../../containers/BestSeller";
import axios from "axios";

export const BestBooksContainer = styled.div`
  width: 100%;
  height: 1700px;
`;

export const Text = styled.div`
  height: 40px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
`;

export const Book = styled.img`
  width: 137px;
  height: 230px;
  margin-right: 20px;
`;

export const BookTitle = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #333;
`;

const BestBooks = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // 알라딘 API 요청을 여기서 수행하여 결과를 저장합니다.
    const fetchResults = async () => {
      // 알라딘 API 요청 코드 작성
      // 요청 결과를 저장하는 데 필요한 데이터 추출
      try {
        const response = await axios.get(
          "http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbwjdalswn2181719001&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101",
          {
            params: {
              ttbkey: "ttbwjdalswn2181719001",
              Query: "베스트 셀러",
            },
          }
        );
        const data = response; /* 알라딘 API 응답 결과에서 필요한 데이터 추출 */
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, []);

  return (
    <BestBooksContainer>
      {BookItem.map((item) => (
        <div style={{ marginBottom: "80px" }}>
          <Text key={item.name}>{item.name}</Text>
          <ImageContainer>
            {item.contents.map((book, index) => (
              <div key={index}>
                <Book src={book.src} alt={book.alt} />
                <BookTitle>{book.text}</BookTitle>
              </div>
            ))}
          </ImageContainer>
        </div>
      ))}
    </BestBooksContainer>
  );
};

export default BestBooks;
