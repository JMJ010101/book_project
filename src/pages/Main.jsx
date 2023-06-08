import React from "react";
import Navbar from "../components/Header/Navbar";
import MainSlide from "../containers/SecondMain/MainSlide/MainSlide";
import MyClip from "../containers/SecondMain/MyClip/MyClip";
import MRoad from "../containers/SecondMain/MRoad/MRoad";
import Various from "../containers/SecondMain/Various/Various";
import ObjectBook2 from "../containers/SecondMain/ObjectBook2/ObjectBook2";
import Interest2 from "../containers/SecondMain/Interest2/Interest2";
import Sliders from "../containers/SecondMain/Sliders/Sliders";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainSlide />
      <MyClip />
      <MRoad />
      <Various />
      <ObjectBook2 />
      <Interest2 />
      <Sliders />
    </>
  );
};

export default Main;
