import { styled } from "styled-components";

export const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffeb60;
  padding: 10px;
  border-radius: 35px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all ease 0.7s;
  z-index: 9;
  .material-icons-outlined {
    font-size: 50px;
    color: #333333;
  }
  &:hover {
    transform: rotate(180deg);
    /* transform: scale(1.2); */
  }
`;

export const IconDiv2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffeb60;
  padding: 10px;
  border-radius: 35px;
  cursor: pointer;
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 9;
  .material-icons-outlined {
    font-size: 50px;
    color: #333333;
  }
  &:hover {
    transform: rotate(180deg);
    transition: all ease 0.5s;
  }
`;
