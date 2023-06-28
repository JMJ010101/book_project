import React from "react";
import Header from "../containers/FirstMain/Header/Header";
import Books from "../containers/FirstMain/Books/Books";
import FreeButton from "../containers/FirstMain/FreeButton/FreeButton";
import ReviewStory from "../containers/FirstMain/ReviewStory/ReviewStory";
import Question from "../containers/FirstMain/Question/Question";
import Fee from "../containers/FirstMain/Fee/Fee";
import ObjectBook from "../containers/FirstMain/ObjectBook/ObjectBook";
import BestSeller from "../containers/FirstMain/Home/BestSeller";
import Complete from "../containers/FirstMain/Home/Complete";
import Footer from "../containers/FirstMain/Home/Footer";
import MainImage from "../containers/FirstMain/Home/MainImage";
import Select from "../containers/FirstMain/Home/Select";
import TopButton from "../components/TopButton/TopButton";

const Home = () => {
  return (
    <>
      <Header />
      <MainImage />
      <Books />
      <ObjectBook />
      <BestSeller />
      <Complete />
      <Fee />
      <Select />
      <ReviewStory />
      <Question />
      <Footer />
      <FreeButton />
      <TopButton />
    </>
  );
};

export default Home;
