import React, { useState } from "react";
import {
  CateButton,
  Click,
  Follow,
  Image,
  Inner,
  NoImage,
  Post,
  Posts,
} from "./Interest2Sty";
import { Title, Writing } from "../MRoad/MRoadSty";
import { InterestItems } from "./InterestList";

const Interest2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("#집밥");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Inner>
        <Title>
          <p>요즘 관심사</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Writing>지금 푹 빠져있는 관심사, 밀리에서 덕질하세요</Writing>
        <Click>
          <button className="recommend">
            <span class="material-icons">favorite</span>
            <p>추천하기</p>
          </button>
          {InterestItems.map((item) => (
            <CateButton
              key={item.name}
              onClick={() => handleCategoryClick(item.name)}
              selected={selectedCategory === item.name}
            >
              {item.name}
            </CateButton>
          ))}
        </Click>
        <Follow>
          {InterestItems.map((item) => (
            <>
              {selectedCategory === item.name &&
                item.follow.map((i) => (
                  <>
                    <Image key={item.name}>
                      <img src={i.src} alt={item.name} />
                    </Image>
                    <NoImage key={item.name}>
                      <div className="tag">
                        <p>{item.name}</p>
                        <span class="material-symbols-outlined">
                          arrow_forward_ios
                        </span>
                      </div>
                      <div className="text">{i.text}</div>
                    </NoImage>
                  </>
                ))}
            </>
          ))}
        </Follow>
        <Posts>
          {InterestItems.map((item) => (
            <>
              {selectedCategory === item.name &&
                item.post.map((i) => (
                  <Post key={i.title}>
                    <div className="thumbnail">
                      <img src={i.src} alt={item.text} />
                    </div>
                    <div className="text">
                      <p className="title">{i.title}</p>
                      <p className="content">{i.text}</p>
                    </div>
                  </Post>
                ))}
            </>
          ))}
        </Posts>
      </Inner>
    </div>
  );
};

export default Interest2;
