import React, { useEffect, useState } from "react";
import {
  BookBox,
  BookContainer,
  Books,
  ButtonBox,
  Info,
  InfoBox,
  Inner,
  Intro,
  Introduction,
  LeftBox,
  ModalContent,
  ModalWrapper,
  More,
  MoreInfo,
  Options,
  ReadButton,
  RightBox,
  SameAuthor,
  Text,
} from "./BookDetailSty";
import MyshelfIcon from "../../images/icon_myshelf.png";
import DownloadIcon from "../../images/icon_download.png";
import StarIcon from "../../images/icon_star.png";
import FullStarIcon from "../../images/icon_full_star.png";
import ShareIcon from "../../images/icon_share.png";
import PostIcon from "../../images/icon_post.png";
import axios from "axios";
import apiServer from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

const BookDetailForm = () => {
  let { id } = useParams();
  console.log(Number(id));
  const [clickMore, setClickMore] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [bookItems, setBookItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleMore = () => {
    setClickMore(!clickMore);
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getBook = async () => {
    try {
      axios.get(`${apiServer}/bookinfo/books`).then((response) => {
        const filteredBook = response.data.filter(
          (item) => item.idx === Number(id)
        );
        console.log("필터", filteredBook);
        setBookItems(filteredBook);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  // 현재 선택된 책의 authors 값을 가져옵니다.
  const currentAuthors = bookItems.find(
    (item) => item.idx === Number(id)
  )?.authors;

  // authors 값이 동일한 다른 책들을 필터링하여 출력합니다.
  const otherBooks = bookItems.filter(
    (item) => item.authors === currentAuthors && item.idx !== Number(id)
  );

  return (
    <>
      <Inner>
        {bookItems.map((item) => (
          <LeftBox key={item.idx}>
            <BookContainer>
              <img src={item.thumbnail} alt="책 표지" />
              <Info>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="authors">{item.authors}</p>
                </div>
                <MoreInfo>
                  <InfoBox className="lala">
                    <div className="gray">출판사</div>
                    <div className="black">{item.publisher}</div>
                  </InfoBox>
                  <InfoBox>
                    <div className="gray">출간일</div>
                    <div className="black">
                      {item.datetime.split(" ").shift()}
                    </div>
                  </InfoBox>
                  <InfoBox>
                    <div className="gray">ISBN</div>
                    <div className="black">{item.isbn}</div>
                  </InfoBox>
                </MoreInfo>
              </Info>
            </BookContainer>
            <Introduction>
              <Intro>책 소개</Intro>
              <Text selected={clickMore}>{item.contents}</Text>
              <More>
                <p onClick={handleMore}>{!clickMore ? "더보기" : "접어보기"}</p>
              </More>
            </Introduction>
            <SameAuthor>
              <Intro>이 저자 역자의 다른 책</Intro>
              <Books>
                {otherBooks.map((i) => (
                  <BookBox
                    key={i.idx}
                    onClick={() => {
                      console.log(i.idx);
                      navigate(`/bookDetail/${i.idx}`);
                      // window.location.replace(`/bookDetail/${i.idx}`);
                    }}
                  >
                    <div className="thumbnail">
                      <img src={i.thumbnail} alt="책 표지" />
                    </div>
                    <div className="title">{i.title}</div>
                    <div className="author">{i.authors}</div>
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
            <button onClick={openModal}>바로 읽기</button>
          </ReadButton>
        </RightBox>
      </Inner>

      {isModalOpen && ( // 모달 컴포넌트
        <ModalWrapper>
          <ModalContent>
            <h2>아직 구독하고 있지 않아요</h2>
            <p>
              구독 시작하고 다양한 독서 콘텐츠를
              <br />
              무제한으로 만나보세요!
              <br />첫 사용이라면 무료로 시작할 수 있어요.
            </p>
            <img
              src="https://d3udu241ivsax2.cloudfront.net/v3/images/common/subscribe-illust-new.61767b1a5c96c47dcc338bb8f7351b6a.png"
              alt="밀리 이미지"
            />
            <ButtonBox>
              <button className="close" onClick={closeModal}>
                닫기
              </button>
              <button
                className="subscribe"
                onClick={() => navigate("/product")}
              >
                구독 시작하기
              </button>
            </ButtonBox>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default BookDetailForm;
