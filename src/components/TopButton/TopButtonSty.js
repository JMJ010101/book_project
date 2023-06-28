import { styled } from "styled-components";

export const TopBtn = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  outline: 2px solid #dfdfdf;
  background-color: white;
  opacity: 0.8;
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    margin-top: -5px;
    color: gray;
  }
  p {
    font-size: 12px;
    font-weight: bold;
    color: gray;
    margin-top: -3px;
  }
`;
