import React, { useEffect, useRef, useState } from "react";
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
import { FilterItem, ShelfItem } from "./MyshelfList";
import axios from "axios";
import apiServer from "../../api/api";

const MyshelfForm = () => {
  const [selectCategory, setSelectCategory] = useState("즐겨찾기");
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState("서재에 담은 순");
  const [clickSetting, setClickSetting] = useState(false);
  const [randomBook, setRandomBook] = useState("");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRandomBook();
  }, []);

  //회원정보 조회
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${apiServer}/api/member/${localStorage.getItem("id")}`
        );
        const userData = response.data;
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
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
                src="https://d3udu241ivsax2.cloudfront.net/v3/images/brand/simple-logo.41a05d959a43fde14438769b6afa3f19.png"
                alt="프로필 사진"
              />
            </ProfileImg>
            <User>
              <div className="name">{localStorage.getItem("name")}</div>
              <div className="subscribe">
                {userData.subscribe === "true" ? (
                  <p>밀리캐스트 구독 중</p>
                ) : (
                  <>
                    <p>밀리캐스트 구독하러 가기</p>
                    <span
                      onClick={GoProduct}
                      className="material-symbols-outlined"
                    >
                      chevron_right
                    </span>
                  </>
                )}
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
              <CategoryBtn>즐겨찾기</CategoryBtn>
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
                    {/* <span
                      className="material-symbols-outlined"
                      onClick={() => setClickSetting(!clickSetting)}
                    >
                      settings
                    </span> */}
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
