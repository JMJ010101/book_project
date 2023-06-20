import React from "react";
import FeedForm from "./../containers/Feed/FeedForm";
import NavbarForm from "../components/Header/NavbarForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Feed = () => {
  return (
    <>
      <NavbarForm />
      <FeedForm />
      <ChatbotIcon />
    </>
  );
};

export default Feed;
