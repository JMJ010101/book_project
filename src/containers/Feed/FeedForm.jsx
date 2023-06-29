import React, { useEffect, useState } from "react";
import {
  Content,
  FeedBox,
  Icons,
  Image,
  Inner,
  Recommend,
  Users,
  Writer,
} from "./FeedSty";
import "./FeedMedia.css";
import { FeedItem } from "./FeedList";
import random1 from "../../images/random/KakaoTalk_20230614_154927238.jpg";
import random2 from "../../images/random/KakaoTalk_20230614_154927238_01.jpg";
import random3 from "../../images/random/KakaoTalk_20230614_154927238_02.jpg";
import random4 from "../../images/random/KakaoTalk_20230614_154927238_03.jpg";
import axios from "axios";
import apiServer from "../../api/api";

const FeedForm = () => {
  const [currentImages, setCurrentImages] = useState("");
  const [feedData, setFeedData] = useState("");
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLike((prevLike) => !prevLike);
    setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
  };

  const randomImages = [random1, random2, random3, random4];

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    const images = FeedItem.map((item) => {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
    });
    setCurrentImages(images);
  };

  //피드 가져오기
  // useEffect(() => {
  //   const fetchFeedData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${apiServer}/api/feed~~~~?`
  //       );
  //       const feedData = response.data;
  //       // setFeedData(feedData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);
  // console.log('피드: ',feedData);

  const handleLikeClick = async () => {
    try {
      const response = await axios.post(`${apiServer}/like/likes`);
      alert("좋아요 등록");
      setLike(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Inner>
        <FeedBox>
          {FeedItem.map((item, index) => (
            <div className="feeds" key={item.title}>
              <Writer>
                <Users>
                  <div className="profile">
                    <img src={item.profile} alt="프로필사진" />
                  </div>
                  <div className="middle">
                    <div className="name">{item.name}</div>
                    <span className="info">{item.time}</span>
                  </div>
                </Users>
              </Writer>
              {item.image === "" ? (
                <Image>
                  <img src={currentImages[index]} alt="이미지" />
                </Image>
              ) : (
                <Image>
                  <img src={item.image} alt="이미지" />
                </Image>
              )}
              <Content>
                <p className="title">{item.title}</p>
                <p className="contents">{item.content}</p>
              </Content>
              <Recommend>
                <p>이 포스트가 마음에 드시나요?</p>
                <Icons>
                  {/* <div className="icon">
                    <span class="material-icons">textsms</span>
                    <span>0</span>
                  </div> */}
                  <div className="icon" onClick={handleLike}>
                    <span class="material-icons">
                      {!like ? "favorite_border" : "favorite"}
                    </span>
                    <span> {likeCount}</span>
                  </div>
                </Icons>
              </Recommend>
            </div>
          ))}
        </FeedBox>
      </Inner>
    </>
  );
};

export default FeedForm;
