import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex-basis: 400px;
  max-width: 1000px;
  border-left: 1px solid #dfdfdf;
  padding: 50px 30px;
`;

export const Inner2 = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`;

export const Page = styled.div`
  border: 1px solid #dfdfdf;
  margin: 20px;
  img {
    width: 200px;
  }
`;

export const Inner = styled.div`
  display: flex;
  float: left;
`;

export const BookContainer = styled.div`
  height: 1000px;
  min-width: 550px;
  max-width: 550px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const OptionBox = styled.div`
  background-color: #f7f7f7;
  padding: 40px 22px;
  border-radius: 10px;
  margin-top: 80px;
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #242424;
    margin-bottom: 20px;
  }
  .currentPage {
    margin-left: 10px;
    font-size: 17px;
    font-weight: bold;
    color: #333333;
    background-color: white;
    width: max-content;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
export const PageOptions = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 40px;
    color: #242424;
    margin-bottom: 7px;
  }
  p {
    font-size: 17px;
    color: #242424;
  }
`;

export const PageOption = styled.div`
  border: ${(props) =>
    props.selected ? "1px solid #242424" : "1px solid #dfdfdf"};
  border-radius: 10px;
  background-color: white;
  margin-bottom: 30px;
  cursor: pointer;
  width: 31%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
