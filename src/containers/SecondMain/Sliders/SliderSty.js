import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  height: 200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Texts = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 40px 0 0 40px;
  .text1 {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 20px;
  }
  .text2 {
    font-size: 13px;
    font-weight: 700;
  }
`;

export const Color = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 13px;
  display: flex;
  position: relative;
  cursor: pointer;
  img {
    width: 150px;
    position: absolute;
    right: 0;
  }
`;
