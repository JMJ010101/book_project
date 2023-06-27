import { styled } from "styled-components";

export const BannerContainer = styled.div``;

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  height: 460px;
`;

export const Boxes = styled.div`
  padding: 20px;
  display: flex;
  overflow-x: hidden;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
  width: 365px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  border: 1px solid rgba(176, 179, 188, 0.3);
  cursor: pointer;
  .blur {
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-size: cover;
    transform: scale(1.2);
    background-repeat: no-repeat;
    filter: blur(5px) opacity(20%);
  }
  img {
    position: absolute;
    bottom: -3px;
    left: 110px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 0 5px 5px 0;
  }
`;

export const Book = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  .title {
    color: #242424;
    font-size: 16px;
    font-weight: 800;
    margin-top: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .writer {
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 800;
    line-height: 32px;
    margin-bottom: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const MoreBtn = styled.button`
  width: 310px;
  display: flex;
  margin: 0 auto;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  outline: 1px solid rgba(176, 179, 188, 0.7);
  padding: 12px 50px 12px 50px;
  color: #6f6f6f;
  justify-content: center;
  cursor: pointer;
  .material-symbols-outlined {
    font-size: 20px;
  }
  p {
    font-weight: 700;
    font-size: 15px;
  }
`;
