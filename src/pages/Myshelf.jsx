import React from "react";
import MyshelfForm from "../containers/Myshelf/MyshelfForm";
import NavbarForm2 from "../components/Header/NavbarForm2";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Myshelf = () => {
  return (
    <>
      <NavbarForm2 />
      <MyshelfForm />
      <ChatbotIcon />
    </>
  );
};

export default Myshelf;
