import React from "react";
import NavbarForm2 from "../components/Header/NavbarForm2";
import BookDetailForm from "../containers/BookDetail/BookDetailForm";
import FreeBanner from "../containers/BookDetail/FreeBanner";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const BookDetail = () => {
  return (
    <>
      <FreeBanner />
      <NavbarForm2 />
      <BookDetailForm />
      <ChatbotIcon />
    </>
  );
};

export default BookDetail;
