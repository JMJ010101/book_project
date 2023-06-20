import React from "react";
import NavbarForm from "../components/Header/NavbarForm";
import BookDetailForm from "../containers/BookDetail/BookDetailForm";
import FreeBanner from "../containers/BookDetail/FreeBanner";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const BookDetail = () => {
  return (
    <>
      <FreeBanner />
      <NavbarForm />
      <BookDetailForm />
      <ChatbotIcon />
    </>
  );
};

export default BookDetail;
