import React from "react";
import Header from "../containers/Header";
import Main from "../containers/Main";
import Books from "../containers/Books";
import BestSeller from "../containers/BestSeller";
import AudioBook from "../components/AudioBook/AudioBook";
import Complete from "../containers/Complete";
import Fee from "../containers/Fee";
import Select from "../containers/Select";
import FreeButton from "../components/FreeButton/FreeButton";
import ReviewStory from "../components/ReviewStory/ReviewStory";
import Question from "../components/Question/Question";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Books />
      <AudioBook />
      <BestSeller />
      <Complete />
      <Fee />
      <Select />
      <ReviewStory />
      <Question />
      <FreeButton />
    </>
  );
};

export default Home;
