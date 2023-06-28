import React from "react";
import FeedForm from "./../containers/Feed/FeedForm";
import NavbarForm from "../components/Header/NavbarForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";
import TopButton from "../components/TopButton/TopButton";

const Feed = () => {
  return (
    <>
      <NavbarForm />
      <FeedForm />
      <ChatbotIcon />
      <TopButton />
    </>
  );
};

export default Feed;
