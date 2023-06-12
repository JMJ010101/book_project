import { styled } from "styled-components";

export const Header = styled.div`
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  height: 43px;
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  align-items: center;
  background-color: white;
  .material-symbols-outlined {
    position: absolute;
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
  }
  p {
    font-size: 18px;
    font-weight: 800;
    margin: 0 auto;
  }
`;

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 73px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #242424;
`;
export const Box = styled.div`
  height: max-content;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0 0 0;
  letter-spacing: -1px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`;
export const Info = styled.div`
  margin-bottom: 35px;
  .left {
    color: #242424;
    margin-right: 20px;
  }
  .right {
    color: #6f6f6f;
  }
`;
export const Fee = styled.div`
  margin-bottom: 35px;
`;

export const Price = styled.div`
  margin-bottom: 12px;
  .price1 {
    color: #242424;
    display: flex;
    justify-content: space-between;
  }
  .price2 {
    color: #8b8b8b;
    display: flex;
    justify-content: space-between;
    margin-left: 5px;
  }
`;

export const Total = styled.div`
  color: #242424;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dfdfdf;
  padding: 17px 0 0 0;
  .totals {
    width: max-content;
    .yellow {
      color: #3d3d3d;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 7px;
      border-radius: 3px;
      background-color: #ffeb60;
    }
    .before {
      font-weight: 700;
      margin-left: 8px;
      text-decoration: line-through;
    }
    .after {
      margin-left: 8px;
    }
  }
`;
export const Method = styled.div`
  margin-bottom: 35px;
`;
export const Methods = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;
export const PayBox = styled.div`
  width: 49.3%;
  height: 60px;
  border: ${(props) =>
    props.selected ? "2px solid #ffeb60" : "1px solid #dfdfdf"};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.selected ? "0 8px 12px rgba(0, 0, 0, 0.1)" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-sizing: border-box;
  cursor: pointer;
  img {
    height: 18px;
    margin-right: 10px;
  }
  p {
    color: ${(props) => (props.selected ? "#242424" : "#8b8b8b")};
    font-weight: ${(props) => (props.selected ? "800" : "700")};
    font-size: 14px;
  }
`;

export const Agree = styled.div`
  margin-bottom: 35px;
`;

export const All = styled.div`
  padding-bottom: 10px;
  display: flex;
  width: max-content;
  cursor: pointer;
  button {
    width: 23px;
    height: 23px;
    border-radius: 20px;
    border: 2px solid #dfdfdf;
    background-color: transparent;
    margin-right: 8px;
    cursor: pointer;
  }
  .button2 {
    width: 23px;
    height: 23px;
    border-radius: 20px;
    border: 2px solid #ffeb60;
    background-color: #ffeb60;
    margin-right: 8px;
    cursor: pointer;
    .material-symbols-outlined {
      font-size: 21px;
      font-weight: 600;
      color: #242424;
      margin: 0 0 0 -6px;
    }
  }
  p {
    font-size: 16px;
    color: #8b8b8b;
    font-weight: 700;
  }
`;

export const One = styled.div`
  border-top: 1px solid #dfdfdf;
  padding-top: 5px;
  cursor: pointer;
  .oneDiv {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .ones {
      display: flex;
    }
    button {
      width: 18px;
      height: 18px;
      border-radius: 2px;
      border: 2px solid #dfdfdf;
      background-color: transparent;
      margin-right: 8px;
      cursor: pointer;
    }
    .button2 {
      width: 18px;
      height: 18px;
      border-radius: 2px;
      border: 2px solid #ffeb60;
      background-color: #ffeb60;
      margin-right: 8px;
      cursor: pointer;
      .material-symbols-outlined {
        font-size: 21px;
        font-weight: 600;
        color: #242424;
        margin: -3px 0 0 -8px;
      }
    }
  }
  p {
    font-size: 14px;
    color: #8b8b8b;
    font-weight: 700;
  }
  .more {
    text-decoration: underline;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 330px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: hidden;
  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #242424;
    margin: 27px 0 18px;
    letter-spacing: -1px;
    text-align: center;
  }
  ul {
    margin: 0 24px 15px 24px;
    li {
      cursor: pointer;
      display: flex;
      color: #6f6f6f;
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
    }
  }
  button {
    margin-top: 15px;
    background-color: #ffeb60;
    color: #242424;
    border: none;
    width: 100%;
    height: 50px;
    cursor: pointer;
  }
`;
