import React from "react";
import Navbar from "../components/Header/Navbar";
import MainSlide from "../containers/SecondMain/MainSlide/MainSlide";
import MyClip from "../containers/SecondMain/MyClip/MyClip";
import MRoad from "../containers/SecondMain/MRoad/MRoad";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainSlide />
      <MyClip />
      <MRoad />
    </>
  );
};

export default Main;
