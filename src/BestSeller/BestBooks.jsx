import React from "react";
import { styled } from "styled-components";
import { BookItem } from "../containers/BestSeller";

export const BestBooksContainer = styled.div`
  width: 1100px;
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
  width: 1100px;
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
