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

import axios from "axios";
import apiServer from "../../api/api";
import { randomImages } from "./FeedList";

const FeedForm = () => {
  const [currentImages, setCurrentImages] = useState("");
  const [randomData, setRandomData] = useState([]);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // const [likedPostIds, setLikedPostIds] = useState([]);

  useEffect(() => {
    getRandomImage();
  }, [randomData]);

  const getRandomImage = () => {
    const images = randomData.map((item) => {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
    });
    setCurrentImages(images);
  };

  // 피드 가져오기
  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const response = await axios.get(`${apiServer}/api/feed`);
        const feedData = response.data;
        const randomFeedData = feedData
          .filter(
            (item) =>
              item.poster !==
              "https://d3udu241ivsax2.cloudfront.net/v3/images/common/adult-cover.7d03be7f61489e54049bc431f4f19e95.png"
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, 30);
        setRandomData(randomFeedData);
        const a = randomFeedData.map((random) => random.idx);
        console.log("idx", a);
        console.log(randomFeedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedData();
  }, []);

  //좋아요 연동
  const handleLikeClick = async (feedId) => {
    try {
      const response = await axios.post(`${apiServer}/like/likes`, {
        member_idx: `${localStorage.getItem("accessToken")}`,
        feed_idx: feedId, // Pass the feedId to the request body
      });
      alert("좋아요 등록");
      setLike(!like);
      setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
      console.log(response.data);
      // setLikedPostIds((prevIds) => [...prevIds, feedId]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Inner>
        <FeedBox>
          {randomData.map((item, index) => (
            <div className="feeds" key={item.idx}>
              <Writer>
                <Users>
                  <div className="profile">
                    <img src={currentImages[index]} alt="프로필사진" />
                  </div>
                  <div className="middle">
                    <div className="name">{item.writer}</div>
                    {item.createdate &&
                      Array.isArray(item.createdate) &&
                      item.createdate.map((date, index) => (
                        <span className="info" key={index}>
                          {date}
                        </span>
                      ))}
                  </div>
                </Users>
              </Writer>
              {item.image === "" ? (
                <Image>
                  <img src={currentImages[index]} alt="이미지" />
                </Image>
              ) : (
                <Image>
                  <img src={item.poster} alt="이미지" />
                </Image>
              )}
              <Content>
                <p className="title">{item.content}</p>
                <p className="contents">{item.content}</p>
              </Content>
              <Recommend>
                <p>이 포스트가 마음에 드시나요?</p>
                <Icons>
                  <div
                    className="icon"
                    onClick={() => {
                      handleLikeClick(item.idx);
                    }}
                  >
                    <span class="material-icons">
                      {!like ? "favorite_border" : "favorite"}
                    </span>
                    <span>{likeCount}</span>
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
