import React, { useState } from "react";
import {
  BookBox,
  BookContainer,
  Books,
  Info,
  Inner,
  Intro,
  Introduction,
  LeftBox,
  More,
  Options,
  ReadButton,
  RightBox,
  SameAuthor,
  Text,
} from "./BookDetailSty";
import { BookItem, OptionItem } from "./BookList";
import MyshelfIcon from "../../images/icon_myshelf.png";
import DownloadIcon from "../../images/icon_download.png";
import StarIcon from "../../images/icon_star.png";
import FullStarIcon from "../../images/icon_full_star.png";
import ShareIcon from "../../images/icon_share.png";
import PostIcon from "../../images/icon_post.png";

const BookDetailForm = () => {
  const [clickMore, setClickMore] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleMore = () => {
    setClickMore(!clickMore);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <Inner>
        {BookItem.map((item) => (
          <LeftBox key={item.title}>
            <BookContainer>
              <img src={item.src} alt="책 표지" />
              <Info>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.author}</p>
                </div>
              </Info>
            </BookContainer>
            <Introduction>
              <Intro>책 소개</Intro>
              <Text selected={clickMore}>{item.introduction}</Text>
              <More>
                <p onClick={handleMore}>{!clickMore ? "더보기" : "접어보기"}</p>
              </More>
            </Introduction>
            <SameAuthor>
              <Intro>이 저자 역자의 다른 책</Intro>
              <Books>
                {item.another.map((i) => (
                  <BookBox>
                    <div className="thumbnail">
                      <img src={i.src} alt="책 표지" />
                    </div>
                    <div className="title">{i.title}</div>
                    <div className="author">{i.author}</div>
                  </BookBox>
                ))}
              </Books>
            </SameAuthor>
          </LeftBox>
        ))}
        <RightBox>
          <Options>
            <div className="option">
              <img src={MyshelfIcon} alt="아이콘" />
              <span>내 서재에 담기</span>
            </div>
            <div className="option">
              <img src={DownloadIcon} alt="아이콘" />
              <span>다운로드</span>
            </div>
            <div className="option" onClick={handleFavorite}>
              {!favorite ? (
                <img src={StarIcon} alt="아이콘" />
              ) : (
                <img src={FullStarIcon} alt="아이콘" />
              )}
              <span>My Favorite</span>
            </div>
            <div className="option">
              <img src={ShareIcon} alt="아이콘" />
              <span>공유하기</span>
            </div>
            <div className="option">
              <img src={PostIcon} alt="아이콘" />
              <span>포스트 쓰기</span>
            </div>
          </Options>
          <ReadButton>
            <button>바로 읽기</button>
          </ReadButton>
        </RightBox>
      </Inner>
    </>
  );
};

export default BookDetailForm;
