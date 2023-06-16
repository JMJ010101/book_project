import React from "react";
import ManagementForm from "../containers/Management/ManagementForm";
import NavbarForm2 from "../components/Header/NavbarForm2";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Management = () => {
  return (
    <>
      <NavbarForm2 />
      <ManagementForm />
      <ChatbotIcon />
    </>
  );
};

export default Management;
