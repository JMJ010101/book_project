import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 44px;
  padding: 30px 15px;
`;
export const OverBox = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;
export const Box = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding: 10px 15px 15px;
  margin-bottom: 20px;
`;
export const Who = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -1px;
  border-bottom: 1px solid #dfdfdf;
  padding: 15px 0;
  margin-bottom: 15px;
`;

export const ShelfContent = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  .gray {
    color: #6f6f6f;
    font-size: 15px;
    font-weight: 700;
  }
  .black {
    color: #242424;
    font-size: 15px;
    font-weight: 700;
  }
`;
export const Notice = styled.div`
  border-top: 1px solid #dfdfdf;
  .red {
    color: #df1d1d;
    font-size: 13px;
    font-weight: 700;
    margin-top: 20px;
  }
  .contents {
    padding: 10px 15px 15px;
  }
  p {
    color: #6f6f6f;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
  }
`;
export const Agree = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 7px;
  width: max-content;
  cursor: pointer;
  button {
    height: 19px;
    width: 19px;
    background-color: transparent;
    border: 2px solid #ffeb60;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
  .button2 {
    height: 19px;
    width: 19px;
    border-radius: 3px;
    border: 2px solid #ffeb60;
    background-color: #ffeb60;
    margin-right: 5px;
    cursor: pointer;
    .material-symbols-outlined {
      font-size: 21px;
      font-weight: 600;
      color: #242424;
      margin: -4px 0 0 -9px;
    }
  }
  p {
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  .later {
    width: 49.5%;
    border-radius: 5px;
    border: none;
    background-color: #c1c1c1;
    color: #242424;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -1px;
    cursor: pointer;
  }
  .continue {
    width: 49.5%;
    border-radius: 5px;
    border: none;
    background-color: #ffeb60;
    color: #242424;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -1px;
    cursor: pointer;
  }
`;
