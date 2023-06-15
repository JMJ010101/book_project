import React, { useState } from "react";
import {
  BookContainer,
  Books,
  BtnBox,
  CateInner,
  CategoryBox,
  CategoryBtn,
  Inner,
  Title,
} from "./MyshelfSty";
import { CategoryItem, FavoriteItem, ShelfItem } from "./MyshelfList";
import { BookBox } from "./../BookDetail/BookDetailSty";

const MyshelfForm = () => {
  const [selectCategory, setSelectCategory] = useState("내 서재");

  const handleCategory = (category) => {
    setSelectCategory(category);
  };
  return (
    <>
      <CategoryBox>
        <CateInner>
          <BtnBox>
            {CategoryItem.map((cate) => (
              <CategoryBtn
                onClick={() => handleCategory(cate.name)}
                selected={selectCategory === cate.name}
              >
                {cate.name}
              </CategoryBtn>
            ))}
          </BtnBox>
        </CateInner>
      </CategoryBox>
      <Inner>
        <BookContainer>
          <Title>내 서재 목록</Title>
          <Books>
            {ShelfItem.map((item) => (
              <BookBox>
                <div className="thumbnail">
                  <img src={item.src} alt="책 표지" />
                </div>
                <div className="title">{item.title}</div>
                <div className="author">{item.author}</div>
              </BookBox>
            ))}
          </Books>
        </BookContainer>
        <BookContainer>
          <Title>즐겨찾기 목록</Title>
          <Books>
            {FavoriteItem.map((item) => (
              <BookBox>
                <div className="thumbnail">
                  <img src={item.src} alt="책 표지" />
                </div>
                <div className="title">{item.title}</div>
                <div className="author">{item.author}</div>
              </BookBox>
            ))}
          </Books>
        </BookContainer>
      </Inner>
    </>
  );
};

export default MyshelfForm;
