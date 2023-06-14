import { styled } from "styled-components";

export const MyshelfBg = styled.div`
  /* background-color: #f7f7f7; */
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextDiv = styled.div`
  margin-top: 320px;
  text-align: center;
  color: #242424;
  letter-spacing: -1px;
  .first {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .second {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  img {
    box-shadow: 20px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;
