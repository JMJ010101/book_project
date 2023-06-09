import React, { useState } from "react";
import { Notice } from "../Product/ProductSty";
import {
  Agree,
  Box,
  Fee,
  Header,
  Info,
  Inner,
  Method,
  Methods,
  PayBox,
  Price,
  Title,
  Total,
} from "./PaymentSty";
import { useNavigate } from "react-router-dom";
import { MethodItem } from "./PaymentList";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [selectMethod, setSelectMethod] = useState("카카오페이");

  const handleMethodClick = (method) => {
    setSelectMethod(method);
  };

  const handleBack = () => {
    navigate("/product");
  };
  return (
    <>
      <Header>
        <span onClick={handleBack} class="material-symbols-outlined">
          arrow_back_ios
        </span>
        <p>결제정보 입력</p>
      </Header>
      <Inner>
        <Info>
          <Title>구독정보</Title>
          <Box>
            <div>
              <span className="left">구독 상품</span>
              <span className="right">전자책 연 정기구독</span>
            </div>
            <div>
              <span className="left">구독 기간</span>
              <span className="right">2023.06.09 ~ 2023.07.09</span>
            </div>
            <div>
              <span className="left">다음 결제일</span>
              <span className="right">2023.07.09</span>
            </div>
          </Box>
        </Info>
        <Fee>
          <Title>결제금액</Title>
          <Box>
            <Price>
              <div className="price1">
                <span>상품 가격</span>
                <span>99,000원</span>
              </div>
              <div className="price2">
                <span>┗ 전자책 연 정기구독</span>
                <span>118,800원</span>
              </div>
              <div className="price2">
                <span>┗ 연 정기구독 할인</span>
                <span>19,800원</span>
              </div>
            </Price>
            <Total>
              <span>총 결제금액</span>
              <div className="totals">
                <span className="yellow">첫 달 무료</span>
                <span className="before">99,900원</span>
                <span className="after">0원</span>
              </div>
            </Total>
          </Box>
        </Fee>
        <Method>
          <Title>결제수단</Title>
          <Methods>
            {MethodItem.map((item) => (
              <>
                <PayBox
                  key={item.name}
                  onClick={() => handleMethodClick(item.name)}
                  selected={selectMethod === item.name}
                >
                  {selectMethod === item.name ? (
                    <img src={item.color} alt={item.name} />
                  ) : (
                    <img src={item.gray} alt={item.name} />
                  )}
                  <p>{item.name} </p>
                </PayBox>
              </>
            ))}
          </Methods>
        </Method>
        <Agree>
          <Title>약관동의</Title>
        </Agree>
        <Notice>유의사항</Notice>
      </Inner>
    </>
  );
};

export default PaymentForm;
