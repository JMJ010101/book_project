import React from "react";
import MyInfoForm from "../containers/MyInfo/MyInfoForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";
import NavbarForm from "./../components/Header/NavbarForm";

const MyInfo = () => {
  return (
    <>
      <NavbarForm />
      <MyInfoForm />
      <ChatbotIcon />
    </>
  );
};

export default MyInfo;
