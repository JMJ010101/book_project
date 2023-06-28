import { styled } from "styled-components";

export const Inner = styled.div`
  display: flex;
  float: left;
  width: 1410px;
  padding: 5px;
  /* overflow: auto; */
`;

export const BookContainer = styled.div`
  height: 1200px;
  min-width: 700px;
  max-width: 700px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
