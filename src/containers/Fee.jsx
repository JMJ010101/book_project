import React from "react";
import { styled } from "styled-components";
import Price from "../images/price.png";
import Price2 from "../images/price2.png";
import Ticket from "../images/ticket.png";
import Won from "../images/won.png";

const FeeContainer = styled.div`
  width: 100%;
  background-color: #ffed61;
`;

const Inner = styled.div`
  width: 1100px;
  height: 780px;
  margin: 0 auto;
  overflow: auto;
`;

const TextBox = styled.div`
  width: 600px;
  height: 280px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;

  .text1 {
    height: 55%;
    font-size: 50px;
    font-weight: 600;
    color: #333;
    p {
      margin-bottom: 8px;
    }
  }
  .text2 {
    height: 45%;
    font-size: 23px;
    color: #767676;
    p {
      margin-bottom: 8px;
    }
  }
`;

const FeeBox = styled.div`
  width: 1000px;
  height: 320px;
  margin: 0 auto;
  overflow: auto;
  display: flex;
`;

const FeeCard = styled.div`
  width: 65%;
  height: 99%;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 48%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  position: relative;
  .inner {
    width: 80%;
    height: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333;
  }
  .title {
    height: 40px;
    font-size: 20px;
    font-weight: 800;
  }
  .fee {
    height: 70px;
    font-size: 22px;
    .won {
      font-size: 18px;
    }
    span {
      font-size: 40px;
      font-weight: 600;
    }
  }
  .fee2 {
    width: 75%;
    margin-left: 28px;
    font-size: 20px;
    color: #878787;
    height: 30px;
    display: flex;
    text-decoration: line-through;
  }
  .text {
    color: #878787;
    height: 20%;
    font-size: 13px;
    font-weight: 600;
    div {
      margin-bottom: 5px;
    }
  }
  img {
    height: 28px;
    margin-left: 7px;
  }
`;

const Text = styled.div`
  width: 35%;
  height: 60%;
  margin-top: 60px;
  color: #333;
  font-weight: 600;
  div {
    margin-bottom: 15px;
    margin-left: 30px;
  }
  .texts {
    display: flex;
    p {
      margin-left: 10px;
      margin-top: 15px;
      line-height: 20px;
    }
  }
  img {
    width: 70px;
  }
`;

const Fee = () => {
  return (
    <FeeContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>언제든 해지 가능!</p>
            <p>첫 달 무료로 가볍게</p>
          </div>
          <div className="text2">
            <p>상황에 맞게 원하는 요금제를</p>
            <p>자유롭게 선택하세요</p>
          </div>
        </TextBox>
        <FeeBox>
          <FeeCard>
            <Card>
              <div className="inner">
                <div className="title">전자책 정기구독</div>
                <div className="fee">
                  월 <span>9,900</span>
                  <span className="won">원</span>
                </div>
                <div className="fee2">
                  <div>118,800</div>
                  <img src={Price} alt="price" />
                </div>
                <div className="fee">
                  연 <span>99,000</span>
                  <span className="won">원</span>
                </div>
                <div className="text">
                  밀리에서 제공하는 컨텐츠를 무제한으로
                </div>
              </div>
            </Card>
            <Card>
              <div className="inner">
                <div className="title">종이책 정기구독</div>
                <div className="fee">
                  월 <span>15,900</span>
                  <span className="won">원</span>
                </div>
                <div className="fee2">
                  <div>202,800</div>
                  <img src={Price2} alt="price2" />
                </div>
                <div className="fee">
                  연<span> 183,000</span>
                  <span className="won">원</span>
                </div>
                <div className="text">
                  <div>밀리의 모든 콘텐츠를 무제한으로 보고</div>
                  <div> 2달에 1번 종이책+전자책 배송까지</div>
                </div>
              </div>
            </Card>
          </FeeCard>
          <Text>
            <div className="texts">
              <img src={Ticket} alt="ticket" />
              <p>
                무료 체험 기간 동안 해지해도
                <br />
                금액이 청구되지 않아요
              </p>
            </div>
            <div style={{ borderBottom: "3px solid white" }} />
            <div className="texts">
              <img src={Won} alt="won" />
              <p>
                유료 결제되어도 사용 이력이
                <br /> 없으면 즉시 환불해드려요
              </p>
            </div>
          </Text>
        </FeeBox>
      </Inner>
    </FeeContainer>
  );
};

export default Fee;
