import React, { useEffect, useState } from "react";
import MainSlide from "../containers/SecondMain/MainSlide/MainSlide";
import MyClip from "../containers/SecondMain/MyClip/MyClip";
import MRoad from "../containers/SecondMain/MRoad/MRoad";
import Various from "../containers/SecondMain/Various/Various";
import ObjectBook2 from "../containers/SecondMain/ObjectBook2/ObjectBook2";
import Interest2 from "../containers/SecondMain/Interest2/Interest2";
import Sliders from "../containers/SecondMain/Sliders/Sliders";
import NavbarForm from "../components/Header/NavbarForm";
import ChatbotIcon from "../components/ChatbotIcon/ChatbotIcon";
import TopButton from "../components/TopButton/TopButton";

const Main = () => {
  return (
    <>
      <NavbarForm />
      <MainSlide />
      <MyClip />
      <MRoad />
      <Various />
      <ObjectBook2 />
      <Interest2 />
      <Sliders />
      <TopButton />
      <ChatbotIcon />
    </>
  );
};

export default Main;
