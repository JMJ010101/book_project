import { useState } from "react";
import { bookApi } from "../../api/bookApi";
import Book from "./Book";
import * as S from "./searchSty";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [filter, setFilter] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [visibleBooks, setVisibleBooks] = useState(5); // 보여지는 책의 수

  const showMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 5); // 이전에 보여진 책의 수에 5를 더해서 업데이트
  };

  const changeInput = (e) => {
    setSearchData(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    closeModal();
  };

  const searchBook = () => {
    if (searchData && !searching) {
      setSearching(true);

      bookApi(searchData, filter)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          alert("에러 발생!");
        })
        .finally(() => {
          setSearching(false);
        });
    }
  };

  const getEnglishFilter = (filter) => {
    switch (filter) {
      case "전체":
      case "책 제목":
        return "title";
      case "저자명":
        return "authors";
      case "출판사명":
        return "publisher";
      case "번역가명":
        return "translators";
      default:
        return "";
    }
  };

  const getRequestUrl = () => {
    const baseUrl = "https://dapi.kakao.com/v3/search/book";
    const target = getEnglishFilter(filter);
    const query = encodeURIComponent(`*${searchData}*`); // 검색어 일부 포함
    return `${baseUrl}?target=${target}&query=${query}`;
  };

  const printRequestUrl = () => {
    const requestUrl = getRequestUrl();
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      searchBook();
    }
  };

  return (
    <>
      <S.Fixed>
        <S.Search>
          <button onClick={openModal}>
            {filter}
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <input
            onChange={changeInput}
            placeholder="검색어를 입력하세요"
            onKeyUp={onKeyUp}
          />
          <button onClick={searchBook} onMouseDown={printRequestUrl}>
            {searching ? (
              "검색 중.."
            ) : (
              <span class="material-icons">search</span>
            )}
          </button>
        </S.Search>
      </S.Fixed>
      <S.BookGrid>
        {data.slice(0, visibleBooks).map((book, index) => {
          const rowIndex = Math.floor(index / 5); // 현재 책의 인덱스에 대한 가로줄(row) 인덱스 계산
          return (
            <div key={index} style={{ order: rowIndex }}>
              <Book bookData={book} />
            </div>
          );
        })}
      </S.BookGrid>
      {data.length > visibleBooks && (
        <S.BtnContainer>
          <S.ShowMoreButton onClick={showMore}>더 보기</S.ShowMoreButton>
        </S.BtnContainer>
      )}
      {isModalOpen && ( // 모달 컴포넌트
        <S.ModalWrapper>
          <S.ModalContent>
            <h2>검색 대상</h2>
            <ul>
              <li onClick={() => selectFilter("전체")}>전체</li>
              <li onClick={() => selectFilter("책 제목")}>책 제목</li>
              <li onClick={() => selectFilter("저자명")}>저자명</li>
              <li onClick={() => selectFilter("출판사명")}>출판사명</li>
              <li onClick={() => selectFilter("번역가명")}>번역가명</li>
            </ul>
            <button onClick={closeModal}>닫기</button>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default Search;
