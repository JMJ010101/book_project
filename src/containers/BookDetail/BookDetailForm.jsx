import React from "react";
import { FreeSub, Info, Inner, Thumbnail } from "./BookDetailSty";

const BookDetailForm = () => {
  return (
    <>
      <FreeSub>
        <p>
          지금 <strong>무료 구독</strong>으로 독서를 시작하세요
        </p>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </FreeSub>
      <Inner>
        <Thumbnail></Thumbnail>
        <Info></Info>
      </Inner>
    </>
  );
};

export default BookDetailForm;
