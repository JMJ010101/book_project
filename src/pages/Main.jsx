import React from "react";
import Navbar from "../components/Header/Navbar";
import MainSlide from "../containers/SecondMain/MainSlide/MainSlide";
import MyClip from "../containers/SecondMain/MyClip/MyClip";
import MRoad from "../containers/SecondMain/MRoad/MRoad";
import Various from "../containers/SecondMain/Various/Various";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainSlide />
      <MyClip />
      <MRoad />
      <Various />
    </>
  );
};

export default Main;
