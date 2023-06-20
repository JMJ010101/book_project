import React from "react";
import ManagementForm from "../containers/Management/ManagementForm";
import NavbarForm from "../components/Header/NavbarForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Management = () => {
  return (
    <>
      <NavbarForm />
      <ManagementForm />
      <ChatbotIcon />
    </>
  );
};

export default Management;
