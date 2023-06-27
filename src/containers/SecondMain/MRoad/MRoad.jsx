import React, { useRef, useState } from "react";
import {
  Inner,
  MainRoad,
  Road,
  RoadContainer,
  Roads,
  Title,
  Writing,
} from "./MRoadSty";
import "swiper/css";
import "swiper/css/navigation";
import { RoadItem } from "./MRoadList";

const MRoad = () => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartScrollLeft(containerRef.current.scrollLeft);
    setIsDragging(true);
    containerRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const distance = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.classList.remove("dragging");
  };

  return (
    <RoadContainer>
      <Inner>
        <Title>
          <p>밀리로드</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Writing>내 픽은 밀어주고 내 글은 책이 되고</Writing>
        <Roads
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <MainRoad>
            <img
              className="image"
              src="https://d2j6uvfek9vas1.cloudfront.net/common_banner/648af8004aee9.jpg"
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
          {RoadItem.map((item) => (
            <Road>
              <div className="thumbnail">
                <div
                  className="blur"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <img src={item.src} alt="썸네일" />
              </div>
              <div className="info">
                <div className="gray">{item.gray1}</div>
                <div className="gray">{item.gray2}</div>
              </div>
              <div className="titleWriter">
                <p className="title">{item.title}</p>
                <p className="writer">{item.writer}</p>
              </div>
              <div className="point">
                <div className="recPoint">
                  <span class="material-symbols-outlined">check</span>추천
                  포인트
                </div>
                <div className="points">
                  <p>{item.point1}</p>
                  <p>{item.point2}</p>
                  <p>{item.point3}</p>
                </div>
              </div>
            </Road>
          ))}
        </Roads>
      </Inner>
    </RoadContainer>
  );
};

export default MRoad;
