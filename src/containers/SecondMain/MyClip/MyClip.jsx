import React from "react";
import { ClipContainer, Clips, Inner, Title } from "./MyClipSty";
import ClipNotice from "../../../images/MyClip_Notice.png";
import ClipAudio from "../../../images/MyClip_AudioBook.png";
import ClipBest from "../../../images/MyClip_BestBook.png";
import ClipInterest from "../../../images/MyClip_Interest.png";
import ClipMagazine from "../../../images/MyClip_Magazine.png";
import ClipThisBook from "../../../images/MyClip_SkyBlueBook.png";
import ClipPlus from "../../../images/MyClip_Plus.svg";

const MyClip = () => {
  return (
    <ClipContainer>
      <Inner>
        <Title>
          <p>MY클립</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Clips>
          <div class="clip">
            <img src={ClipNotice} alt="알림센터" />
            <p>알림센터</p>
          </div>
          <div class="clip">
            <img src={ClipAudio} alt="오디오북·챗북" />
            <p>오디오북·챗북</p>
          </div>
          <div class="clip">
            <img src={ClipBest} alt="서점 베스트" />
            <p>서점 베스트</p>
          </div>
          <div class="clip">
            <img src={ClipInterest} alt="요즘 관심사" />
            <p>요즘 관심사</p>
          </div>
          <div class="clip">
            <img src={ClipMagazine} alt="매거진 소식" />
            <p>매거진 소식</p>
          </div>
          <div class="clip">
            <img src={ClipThisBook} alt="이럴 땐 이런 책" />
            <p>이럴 땐 이런 책</p>
          </div>
          <div class="clip">
            <img src={ClipPlus} alt="클립 추가" />
            <p>클립 추가</p>
          </div>
        </Clips>
      </Inner>
    </ClipContainer>
  );
};

export default MyClip;
