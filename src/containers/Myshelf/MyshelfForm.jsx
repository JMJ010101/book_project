import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "../../images/icon_full_star.png";
import {
  BookBox,
  BookContainer,
  Books,
  BtnBox,
  CateInner,
  CategoryBox,
  CategoryBtn,
  EndContainer,
  ImageBox,
  Inner,
  Inner2,
  LeftBox,
  Menu,
  Options,
  ProfileImg,
  Sort,
  SortBox,
  TextBox,
  Total,
  User,
  UserContainer,
} from "./MyshelfSty";
import { CategoryItem, FilterItem, ShelfItem } from "./MyshelfList";

const MyshelfForm = () => {
  const [selectCategory, setSelectCategory] = useState("즐겨찾기");
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState("서재에 담은 순");
  const [clickSetting, setClickSetting] = useState(false);
  const [randomBook, setRandomBook] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRandomBook();
  }, []);

  const getRandomBook = () => {
    const favoriteShelf = ShelfItem.find((item) => item.name === "즐겨찾기");
    if (favoriteShelf) {
      const randomIndex = Math.floor(
        Math.random() * favoriteShelf.books.length
      );
      const book = favoriteShelf.books[randomIndex];
      setRandomBook(book);
    }
  };

  const handleCategory = (category) => {
    setSelectCategory(category);
  };

  const selectFilter = (selectedFilter) => {
    if (selectedFilter === "가나다 순") {
      setFilter("가나다 순");
    } else {
      setFilter(selectedFilter);
    }
  };

  const getFilteredBooks = () => {
    if (selectCategory === "즐겨찾기") {
      return ShelfItem.find((item) => item.name === "즐겨찾기")?.books || [];
    }
    return [];
  };

  let filteredBooks = getFilteredBooks();

  // Sort the filteredBooks array if the selected filter is "가나다 순"
  if (filter === "가나다 순") {
    filteredBooks = [...filteredBooks].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  const GoProduct = () => {
    navigate("/product");
  };

  return (
    <>
      <Inner>
        <UserContainer>
          <LeftBox>
            <ProfileImg>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTJfMjky%2FMDAxNjcwODQ4MzYyNTYy.QeYlBp0TP6KOWha_zEZnLqY-wQ6jEwZ0jEEVbdbZUP8g.jdK9_uUcbOqKVsSJl6GpN2POuSe-ZFVKiGtpSXIelEEg.JPEG.windysky70%2FIMG_8178.JPG&type=sc960_832"
                alt="프로필 사진"
              />
            </ProfileImg>
            <User>
              <div className="name">고양이귀여워</div>
              <div className="subscribe">
                <p>밀리의 서재 구독하러 가기</p>
                <span onClick={GoProduct} className="material-symbols-outlined">
                  chevron_right
                </span>
              </div>
            </User>
          </LeftBox>
          <Menu>
            <span className="material-symbols-outlined">menu</span>
          </Menu>
        </UserContainer>
        {randomBook && (
          <EndContainer>
            <TextBox>
              <div className="favorite">
                <img src={StarIcon} alt="별" />
                <p>나의 인생책</p>
              </div>
              <div className="title">"{randomBook.title}"</div>
            </TextBox>
            <ImageBox>
              <img src={randomBook.src} alt={randomBook.title} />
            </ImageBox>
          </EndContainer>
        )}
      </Inner>
      <Inner2>
        <CategoryBox>
          <CateInner>
            <BtnBox>
              {CategoryItem.map((cate) => (
                <CategoryBtn
                  key={cate.name}
                  onClick={() => handleCategory(cate.name)}
                  selected={selectCategory === cate.name}
                >
                  {cate.name}
                </CategoryBtn>
              ))}
            </BtnBox>
          </CateInner>
        </CategoryBox>
        {ShelfItem.map(
          (i) =>
            selectCategory === i.name && (
              <BookContainer key={i.name}>
                <Options>
                  <Total>{i.books.length}권</Total>
                  <Sort>
                    <SortBox
                      expanded={expanded}
                      onClick={() => setExpanded(!expanded)}
                    >
                      {FilterItem.map((item) => (
                        <span
                          className="filter"
                          key={item.name}
                          onClick={() => selectFilter(item.name)}
                        >
                          {item.name}
                        </span>
                      ))}
                      <p>{filter}</p>
                      {!expanded ? (
                        <span className="material-icons-outlined">
                          chevron_left
                        </span>
                      ) : (
                        <span className="material-icons-outlined">
                          chevron_right
                        </span>
                      )}
                    </SortBox>
                    <span
                      className="material-symbols-outlined"
                      onClick={() => setClickSetting(!clickSetting)}
                    >
                      settings
                    </span>
                  </Sort>
                </Options>
                <Books>
                  {filteredBooks.map((item) => (
                    <BookBox key={item.title} clickSetting={clickSetting}>
                      <div className="thumbnail">
                        <img src={item.src} alt="책 표지" />
                        {!clickSetting ? (
                          ""
                        ) : (
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        )}
                      </div>
                      <div className="title">{item.title}</div>
                      <div className="author">{item.author}</div>
                    </BookBox>
                  ))}
                </Books>
              </BookContainer>
            )
        )}
      </Inner2>
    </>
  );
};

export default MyshelfForm;
