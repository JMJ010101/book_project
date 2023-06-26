import * as S from "./BookSty";
import NoImage from "../../images/이미지준비중.jpg";

const Book = ({ bookData: book }) => {
  const author = book.authors[0]; // 첫 번째 저자만 선택
  return (
    <div style={{ padding: "10px" }}>
      <S.Links
        to={`/bookDetail/${encodeURIComponent(book.isbn.split(" ")[0])}`}
      >
        <S.BookSection>
          {book.thumbnail === "" ? (
            <S.BookImage src={NoImage} alt="이미지 준비중" />
          ) : (
            <S.BookImage src={book.thumbnail} alt="도서 미리보기" />
          )}

          <S.RightSection>
            <section>
              <S.BookInfoText>{book.title}</S.BookInfoText>
            </section>
            <section>
              <S.BookAuthor>{author}</S.BookAuthor> {/* 첫 번째 저자만 출력 */}
            </section>
            {/* <section>
          <S.BookInfoLabel>설명</S.BookInfoLabel>
          <S.BookInfoText>{book.contents}</S.BookInfoText>
        </section>
        <section>
          <S.BookInfoLabel>상세페이지</S.BookInfoLabel>
          <S.BookInfoText>{book.url}</S.BookInfoText>
        </section> */}
          </S.RightSection>
        </S.BookSection>
      </S.Links>
    </div>
  );
};

export default Book;
