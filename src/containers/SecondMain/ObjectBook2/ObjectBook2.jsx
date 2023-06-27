import React, { useRef, useState } from "react";
import { Inner, Objects } from "./Object2Sty";
import { Title, Writing } from "../MRoad/MRoadSty";
import { ObjectItem } from "./ObjectList";

const ObjectBook2 = () => {
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
    <div>
      <Inner>
        <Title>
          <p>내 공간을 채워주는 오브제북</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Title>
        <Writing>영상으로 책의 감성을 오롯이 느껴보세요</Writing>
        <Objects
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
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
