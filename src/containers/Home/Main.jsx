import React from "react";
import { styled } from "styled-components";
import MainBg from "../../images/MainBg.png";
import MainImg from "../../components/Home/Main/MainImg";
import Millie from "../../images/millie.png";

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
`;

export const Inner = styled.div`
  max-width: 1200px;
  height: 850px;
  position: relative;
  display: block;
  margin: 0 auto;
  overflow: auto;
  background-image: url(${MainBg});
  background-size: 765px;
  background-repeat: no-repeat;
  background-position: 96% 77%;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 230px;
  margin-top: 220px;
  margin-left: 40px;
  .text1 {
    height: 70%;
    font-size: 60px;
    font-weight: 600;
    color: #333;
    line-height: 70px;
  }
  .text2 {
    height: 30%;
    font-size: 35px;
    color: #333;
    line-height: 30px;
    p {
      margin-bottom: 8px;
    }
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Inner>
        <TextBox style={{ animationDelay: "0.4s" }}>
          <div className="text1">
            당신의 일상을
            <br />
            1밀리+
          </div>
          <div className="text2">독서와 무제한 친해지리</div>
        </TextBox>
        <MainImg
          src={Millie}
          alt={Millie}
          style={{
            width: "160px",
            marginTop: "280px",
            marginLeft: "40px",
            animationDelay: "0.8s",
          }}
        />
      </Inner>
    </MainContainer>
  );
};

export default Main;
