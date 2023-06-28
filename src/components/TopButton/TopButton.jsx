import React, { useEffect, useState } from "react";
import { TopBtn } from "./TopButtonSty";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ClickButton = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", ClickButton);
    return () => {
      window.removeEventListener("scroll", ClickButton);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div>
          <TopBtn onClick={ToTop}>
            <span class="material-symbols-outlined">expand_less</span>
            <p>TOP</p>
          </TopBtn>
        </div>
      )}
    </>
  );
};

export default TopButton;
