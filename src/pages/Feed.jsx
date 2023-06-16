import React from "react";
import FeedForm from "./../containers/Feed/FeedForm";
import NavbarForm2 from "../components/Header/NavbarForm2";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";

const Feed = () => {
  return (
    <>
      <NavbarForm2 />
      <FeedForm />
      <ChatbotIcon />
    </>
  );
};

export default Feed;
