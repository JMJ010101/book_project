import React, { useState } from "react";
import { BtnBox, Notice } from "../Product/ProductSty";
import {
  Agree,
  All,
  Box,
  Fee,
  Header,
  Info,
  Inner,
  Method,
  Methods,
  ModalContent,
  ModalWrapper,
  One,
  PayBox,
  Price,
  Title,
  Total,
} from "./PaymentSty";
import { useNavigate } from "react-router-dom";
import {
  AgreeItem,
  InfoItem,
  MethodItem,
  ModalItem,
  NoticeItems,
  PriceItem,
} from "./PaymentList";
import axios from "axios";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [selectMethod, setSelectMethod] = useState("카카오페이");
  const [clickAll, setClickAll] = useState(false);
  const [clickOne, setClickOne] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMethodClick = (method) => {
    setSelectMethod(method);
  };

  const handleBack = () => {
    navigate("/product");
  };

  const handleClickAll = () => {
    setClickAll(!clickAll);
    setClickOne(!clickAll);
    setClickTwo(!clickAll);
  };

  const handleClickOne = () => {
    setClickOne(!clickOne);
    if (clickAll) {
      setClickAll(false);
    }
    if (clickTwo && !clickAll) {
      setClickAll(true);
    }
  };

  const handleClickTwo = () => {
    setClickTwo(!clickTwo);
    if (clickAll) {
      setClickAll(false);
    }
    if (clickOne && !clickAll) {
      setClickAll(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const fetchData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       "http://localhost:8091/api/subscribe",
  //       {}, // 요청 본문이 필요하지 않은 경우 빈 객체를 전달합니다.
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );

  //     // 데이터를 받아와 처리
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // };

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
            {InfoItem.map((item) => (
              <div key={item.left}>
                <span className="left">{item.left}</span>
                <span className="right">{item.right}</span>
              </div>
            ))}
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
              {PriceItem.map((item) => (
                <div key={item.left} className="price2">
                  <span>{item.left}</span>
                  <span>{item.right}</span>
                </div>
              ))}
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
          {AgreeItem.map((item) => (
            <Box>
              <All onClick={() => handleClickAll()}>
                {!clickAll ? (
                  <button />
                ) : (
                  <button className="button2">
                    <span class="material-symbols-outlined">done</span>
                  </button>
                )}
                <p>{item.p1}</p>
              </All>
              <One>
                <div className="oneDiv" onClick={() => handleClickOne()}>
                  <div className="ones">
                    {!clickOne ? (
                      <button />
                    ) : (
                      <button className="button2">
                        <span class="material-symbols-outlined">done</span>
                      </button>
                    )}
                    <p>{item.p2}</p>
                  </div>
                  <p className="more" onClick={openModal}>
                    보기
                  </p>
                </div>
                <div className="oneDiv" onClick={() => handleClickTwo()}>
                  <div className="ones">
                    {!clickTwo ? (
                      <button />
                    ) : (
                      <button className="button2">
                        <span class="material-symbols-outlined">done</span>
                      </button>
                    )}
                    <p>{item.p3}</p>
                  </div>
                  <p className="more" onClick={openModal}>
                    보기
                  </p>
                </div>
              </One>
            </Box>
          ))}
        </Agree>
        <Notice style={{ margin: "-20px 0 60px" }}>
          {NoticeItems.map((item) => (
            <>
              <div key={item.title} className="title">
                {item.title}
              </div>
              {item.content.map((i) => (
                <div key={item.title} className="content">
                  {i.con}
                </div>
              ))}
            </>
          ))}
        </Notice>
      </Inner>
      <BtnBox>
        {!clickAll ? (
          <button>
            <p>0원 결제하기</p>
          </button>
        ) : (
          <button className="button2">
            <p>0원 결제하기</p>
          </button>
        )}
      </BtnBox>
      {isModalOpen && (
        <ModalWrapper>
          <ModalContent>
            {ModalItem.map((item) => (
              <>
                <h2>{item.title}</h2>
                <ul>
                  <li>{item.text}</li>
                </ul>
                {item.content.map((i) => (
                  <ul>
                    <li>{i.num}</li>
                    {i.contents.map((con) => (
                      <li>{con.text}</li>
                    ))}
                  </ul>
                ))}
                <button onClick={closeModal}>확인</button>
              </>
            ))}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default PaymentForm;
