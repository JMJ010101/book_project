import React from "react";
import MyshelfForm from "../containers/Myshelf/MyshelfForm";
import NavbarForm from "../components/Header/NavbarForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Myshelf = () => {
  return (
    <>
      <NavbarForm />
      <MyshelfForm />
      <ChatbotIcon />
    </>
  );
};

export default Myshelf;
