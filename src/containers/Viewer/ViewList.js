import LogoPage from "../../images/LogoPage.PNG";
import number3 from "../../images/page/3페이지.PNG";
import number4 from "../../images/page/4페이지.PNG";
import number5 from "../../images/page/5페이지.PNG";
import number6 from "../../images/page/6페이지.PNG";
import number7 from "../../images/page/7페이지.PNG";
import number8 from "../../images/page/8페이지.PNG";

export const BookPage = [
  { src: LogoPage },
  // {
  //   src: "https://image.aladin.co.kr/product/28683/34/cover500/k802836269_1.jpg",
  // },
  { src: number3 },
  { src: number4 },
  { src: number5 },
  { src: number6 },
  { src: number7 },
  { src: number8 },
];

export const PageOptionList = [
  { span: "menu_book", name: "양쪽" },
  { span: "description", name: "한쪽" },
  { span: "library_books", name: "모아보기" },
];

if (window.currentBook) {
  const Book = window.currentBook[0];
  console.log("북", Book);
  BookPage.splice(1, 0, { src: Book.thumbnail });
}
