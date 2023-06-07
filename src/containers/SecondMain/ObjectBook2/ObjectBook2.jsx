import React from "react";
import { Inner, Objects } from "./Object2Sty";
import { Title, Writing } from "../MRoad/MRoadSty";
import { ObjectItem } from "./ObjectList";

const ObjectBook2 = () => {
  return (
    <div>
      <Inner>
        <Title>
          <p>내 공간을 채워주는 오브제북</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Writing>영상으로 책의 감성을 오롯이 느껴보세요</Writing>
        <Objects>
          {ObjectItem.map((item) => (
            <div className="box" key={item.title}>
              <video src={item.src} />
              <div className="badge">
                <p>오브제북</p>
              </div>
              <div className="title">{item.title}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </Objects>
      </Inner>
    </div>
  );
};

export default ObjectBook2;
