import React, { useState } from "react";
import {
  Btn,
  Btns,
  CateBox,
  Content,
  FeedBox,
  Feeds,
  Feedss,
  FollowBtn,
  Icons,
  Image,
  Inner,
  Recommend,
  Users,
  Writer,
} from "./FeedSty";
import { CategoryItem } from "./FeedList";

const FeedForm = () => {
  const [selectCategory, setSelectCategory] = useState("전체");
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [clickFollow, setClickFollow] = useState(false);

  const ClickCategory = (category) => {
    setSelectCategory(category);
  };

  const handleLike = () => {
    setLike(!like);
  };

  const handleFollow = () => {};

  return (
    <>
      <CateBox>
        <Btns>
          {CategoryItem.map((item) => (
            <Btn
              key={item.name}
              onClick={() => ClickCategory(item.name)}
              selected={selectCategory === item.name}
            >
              {item.name}
            </Btn>
          ))}
        </Btns>
      </CateBox>
      <Inner>
        <FeedBox>
          <Feeds>
            <Writer>
              <Users>
                <div className="profile">
                  <img
                    // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTJfMjky%2FMDAxNjcwODQ4MzYyNTYy.QeYlBp0TP6KOWha_zEZnLqY-wQ6jEwZ0jEEVbdbZUP8g.jdK9_uUcbOqKVsSJl6GpN2POuSe-ZFVKiGtpSXIelEEg.JPEG.windysky70%2FIMG_8178.JPG&type=sc960_832"
                    alt="프로필사진"
                  />
                </div>
                <div className="middle">
                  <div className="name">집가고싶다</div>
                  <span className="info">하이라이트 • 12시간 전 </span>
                </div>
              </Users>
              <FollowBtn>팔로우</FollowBtn>
            </Writer>
            <Image>
              <img
                src="https://img.millie.co.kr//service/post/667440/6476f55d75bcc.JPG"
                alt="이미지"
              />
            </Image>
            <Content>
              <p className="title">
                독서관 일기장 #22 든든한 식물 귀여운 식물 배신하는 식물
              </p>
              <p className="contents">
                사장은 식물을 잘 돌본다. 매일 들어오면서 상태를 살피는 것만 봐도
                그렇다. 화분의 흙이 어찌구저찌구
              </p>
            </Content>
            <Recommend>
              <p>이 포스트가 마음에 드시나요?</p>
              <Icons>
                <div className="icon">
                  <span class="material-icons">textsms</span>
                  <span>0</span>
                </div>
                <div className="icon" onClick={handleLike}>
                  <span class="material-icons">
                    {!like ? "favorite_border" : "favorite"}
                  </span>
                  <span> {!like ? likeCount : likeCount + 1}</span>
                </div>
              </Icons>
            </Recommend>
          </Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
        </FeedBox>
        <FeedBox>
          <Feedss></Feedss>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
        </FeedBox>
        <FeedBox>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
        </FeedBox>
        <FeedBox>
          <Feeds></Feeds>
          <Feeds></Feeds>
          <Feeds></Feeds>
        </FeedBox>
      </Inner>
    </>
  );
};

export default FeedForm;
