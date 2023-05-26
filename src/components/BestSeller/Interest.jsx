import React, { useState } from "react";
import { styled } from "styled-components";
import { BookItem2 } from "../../containers/BestSeller";

const InterestContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const Category = styled.div`
  height: 50px;
  display: flex;
`;

const LinkButton = styled.button`
  width: max-content;
  min-width: 60px;
  height: 30px;
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #333;
  color: ${(props) => (props.selected ? "white" : "#333")};
  background-color: ${(props) => (props.selected ? "#333" : "white")};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 7px;
  cursor: pointer;
`;

const Books = styled.div`
  display: flex;
`;

const Book = styled.img`
  width: 137px;
  height: 230px;
  margin-right: 20px;
`;

const BookTitle = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #333;
`;

const Interest = () => {
  const [selectedCategory, setSelectedCategory] = useState("동물");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <InterestContainer>
      <Category>
        {BookItem2.map((item) => (
          <LinkButton
            key={item.name}
            onClick={() => handleCategoryClick(item.name)}
            selected={selectedCategory === item.name}
          >
            {item.name}
          </LinkButton>
        ))}
      </Category>
      <Books>
        {BookItem2.map((item) => (
          <>
            {selectedCategory === item.name &&
              item.contents.map((book, index) => (
                <div key={index}>
                  <Book src={book.src} alt={book.alt} />
                  <BookTitle>{book.text}</BookTitle>
                </div>
              ))}
          </>
        ))}
      </Books>
    </InterestContainer>
  );
};

export default Interest;
