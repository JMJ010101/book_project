import React from "react";
import LeaveUserForm from "../containers/LeaveUser/LeaveUserForm";
import NavbarForm from "./../components/Header/NavbarForm";
import ChatbotIcon from "./../components/ChatbotIcon/ChatbotIcon";

const LeaveUser = () => {
  return (
    <>
      <NavbarForm />
      <LeaveUserForm />
      <ChatbotIcon />
    </>
  );
};

export default LeaveUser;
