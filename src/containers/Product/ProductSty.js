import { styled } from "styled-components";
export const ProductBg = styled.div`
  max-width: 1450px;
  height: 250px;
  margin: 0 auto;
  top: 0;
  position: sticky;
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
  height: 1000px;
  max-width: 1450px;
  margin: 0 auto;
  margin-top: -90px;
  background-color: white;
  border-radius: 40px 40px 0 0;
  border: 1px solid green;
`;
export const TextBox = styled.div`
  margin: 40px 0 20px;
  padding: 0 20px;
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
  padding: 0 8px 0 20px;
  display: flex;
`;

export const Option = styled.div`
  width: 49.3%;
  border: ${(props) => (props.selected ? "4px solid #ffeb60" : "")};
  border-radius: 15px;
  margin-right: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  /* box-sizing: border-box; */
`;
export const Check = styled.div`
  height: 18px;
  width: 18px;
  border: ${(props) =>
    props.selected ? "4px solid #ffeb60" : "1px solid #dfdfdf"};
  border-radius: 20px;
`;
export const Price = styled.div`
  margin: 15px 0 20px;
  letter-spacing: -1px;
  .text1 {
    color: #555555;
    font-size: 15px;
    font-weight: 800;
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

export const BtnBox = styled.div`
  width: 1450px;
  margin: 0 auto;
`;

export const PaymentBtn = styled.button`
  z-index: 9;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 1450px;
  border: none;
  background-color: #ffeb60;
  font-size: 16px;
  color: #242424;
  cursor: pointer;
`;
