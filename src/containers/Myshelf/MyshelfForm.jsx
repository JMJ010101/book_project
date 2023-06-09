import React from "react";
import { ImageDiv, MyshelfBg, TextDiv } from "./MyshelfSty";

const MyshelfForm = () => {
  return (
    <MyshelfBg>
      <TextDiv>
        <p className="first">진짜 내 서재를 만나세요</p>
        <p className="second">
          인생책부터 독서노트까지 나의 모든 독서활동을 한 곳에서
        </p>
      </TextDiv>
      <ImageDiv>
        <img
          src="https://d3udu241ivsax2.cloudfront.net/v3/images/myshelf/myshelf-pc.e63625aba07f72f40bb36ab1a6cd97f1.jpg"
          alt="내 서재 이미지"
        />
      </ImageDiv>
    </MyshelfBg>
  );
};

export default MyshelfForm;
