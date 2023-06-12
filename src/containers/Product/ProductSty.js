import { styled } from "styled-components";
export const ProductBg = styled.div`
  max-width: 1450px;
  height: 250px;
  margin: 0 auto;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  background-color: #ffeb60;
  z-index: -1;
  p {
    font-size: 24px;
    font-weight: 800;
    color: #242424;
    line-height: 35px;
    padding: 63px 0 0 20px;
    letter-spacing: -1px;
  }
`;
export const Back = styled.div`
  top: 0;
  margin: 12px 0 0 20px;
  z-index: 3;
  position: fixed;
  .material-symbols-outlined {
    color: #242424;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ProductContainer = styled.div`
  height: max-content;
  max-width: 1450px;
  margin: 0 auto;
  margin-top: -90px;
  background-color: white;
  border-radius: 40px 40px 0 0;
  margin-bottom: 20px;
  padding: 0 20px;
`;
export const TextBox = styled.div`
  padding: 40px 0 20px;
  .text1 {
    color: #242424;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 7px;
    letter-spacing: -1px;
  }
  .text2 {
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`;

export const Options = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Option = styled.div`
  width: 49.3%;
  height: 200px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
`;
export const Border = styled.div`
  border: ${(props) =>
    props.selected ? "4px solid #ffeb60" : "1px solid white"};
  border-radius: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Check = styled.div`
  height: 20px;
  width: 20px;
  border: ${(props) =>
    props.selected ? "6px solid #ffeb60" : "2px solid #dfdfdf"};
  border-radius: 20px;
  transition: 0.2s ease;
  box-sizing: border-box;
`;
export const Price = styled.div`
  margin: 15px 0 20px;
  letter-spacing: -1px;
  .text1 {
    color: #555555;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .text2 {
    .fee {
      color: #242424;
      font-size: 20px;
      font-weight: 800;
    }
    .month {
      color: #8b8b8b;
      font-size: 14px;
      font-weight: 800;
      margin-left: 5px;
    }
  }
`;
export const Tag = styled.div`
  letter-spacing: -1px;
  .tags {
    border: 1px solid #8b8b8b;
    color: #8b8b8b;
    font-size: 12px;
    font-weight: 800;
    padding: 7px 12px;
    width: max-content;
    border-radius: 20px;
    margin-top: 8px;
  }
`;
export const NoticeBox = styled.div`
  padding-bottom: 60px;
`;

export const Notice = styled.div`
  padding: 20px 0 8px;
  flex-wrap: wrap;
  .title {
    color: #555555;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 12px;
  }
  .content {
    color: #8b8b8b;
    font-size: 13px;
    font-weight: 700;
    line-height: 23px;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 60px;
  z-index: 9;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  button {
    height: 60px;
    width: 1450px;
    border: none;
    background-color: #ffeb60;
    cursor: pointer;
    opacity: 0.4;
    p {
      font-size: 17px;
      color: #242424;
      letter-spacing: -1.2px;
    }
  }
  .button2 {
    height: 60px;
    width: 1450px;
    border: none;
    background-color: #ffeb60;
    cursor: pointer;
    opacity: 1;
    p {
      font-size: 17px;
      color: #242424;
      letter-spacing: -1.2px;
    }
  }
`;
