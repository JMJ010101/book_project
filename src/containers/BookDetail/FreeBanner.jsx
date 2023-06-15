import React from "react";
import { FreeSub } from "./BookDetailSty";
import { useNavigate } from "react-router-dom";

const FreeBanner = () => {
  const navigate = useNavigate();

  const GoProduct = () => {
    navigate("/product");
  };

  return (
    <FreeSub onClick={GoProduct}>
      <p>
        지금 <strong>무료 구독</strong>으로 독서를 시작하세요
      </p>
      <span class="material-symbols-outlined">arrow_forward_ios</span>
    </FreeSub>
  );
};

export default FreeBanner;
