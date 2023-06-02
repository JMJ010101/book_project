import React from "react";
import {
  Inner,
  MainRoad,
  Road,
  RoadContainer,
  Roads,
  Writing,
} from "./MRoadSty";
import { Title } from "../MyClip/MyClipSty";

const MRoad = () => {
  return (
    <RoadContainer>
      <Inner>
        <Title>
          <p>밀리로드</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Writing>내 픽은 밀어주고 내 글은 책이 되고</Writing>
        <Roads>
          <MainRoad>
            <img
              className="girl"
              src="https://d2j6uvfek9vas1.cloudfront.net/common_banner/645a2076c1d01.jpg"
              alt="밀리로드"
            />
            <img
              className="title"
              src="https://d3udu241ivsax2.cloudfront.net/v3/images/millieRoad/logo.8e3db3f293d1276ec521c8c767b3719d.png"
              alt="밀리로드 글씨"
            />
            <div className="text">
              <p>작가가 되는 가장 빠른 길!</p>
              <p>내일의 베스트 셀러를 만나다</p>
            </div>
            <div className="small">
              <p>작품 둘러보기 </p>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
          </MainRoad>
          <Road>
            <div className="thumbnail"></div>
            <div className="info">
              <div className="gray">연재</div>
              <div className="gray">총 1화</div>
            </div>
            <div className="titleWriter"></div>
            <div className="point">
              <div className="recPoint"></div>
              <div className="points"></div>
            </div>
          </Road>
        </Roads>
      </Inner>
    </RoadContainer>
  );
};

export default MRoad;
