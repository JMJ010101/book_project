import { styled } from "styled-components";

export const FreeSub = styled.div`
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffeb60;
  cursor: pointer;
  p {
    font-size: 16px;
    color: #242424;
    font-weight: 700;
    letter-spacing: -1px;
    strong {
      font-weight: 800;
    }
  }
  .material-symbols-outlined {
    color: #242424;
    font-size: 10px;
    font-weight: 700;
    margin-left: 3px;
  }
`;
export const Inner = styled.div`
  max-width: 1450px;
  height: max-content;
  margin: 0 auto;
  display: flex;
  border: 1px solid #dfdfdf;
`;
export const LeftBox = styled.div`
  background-color: #f6f6f6;
  width: 1180px;
`;
export const RightBox = styled.div`
  height: auto;
  min-width: 270px;
  background-color: #fff;
  border-left: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .option {
    position: sticky;
    top: 65px;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    padding: 10px 25px;
    align-items: center;
    cursor: pointer;
    img {
      width: 25px;
      margin-right: 7px;
    }
    span {
      font-size: 13px;
      font-weight: 800;
      color: #242424;
    }
  }
`;

export const Options = styled.div`
  position: sticky;
  top: 65px;
`;

export const ReadButton = styled.div`
  position: sticky;
  bottom: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  button {
    width: 250px;
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`;

export const BookContainer = styled.div`
  background-color: #fff;
  height: max-content;
  display: flex;
  padding: 32px 25px;
  img {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 220px;
    margin-right: 40px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    color: #242424;
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0 12px;
  }
  .author {
    color: #8b8b8b;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #f7f7f7;
  padding: 20px 0;
  width: 860px;
`;

export const InfoBox = styled.span`
  text-align: center;
  width: 33%;
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
  .black {
    color: #242424;
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 12px;
  }
  .gray {
    color: #8b8b8b;
    font-size: 12px;
    font-weight: 700;
    margin: 12px 0 15px;
  }
`;

export const Introduction = styled.div`
  height: max-content;
  background-color: #fff;
  padding: 20px 25px;
  margin-top: 12px;
`;

export const Intro = styled.div`
  color: #242424;
  font-size: 16px;
  font-weight: 800;
  margin: 8px 0 15px;
`;

export const Text = styled.p`
  height: max-content;
  color: #555555;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  word-spacing: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(props) => (props.selected ? "" : "-webkit-box")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const More = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  p {
    color: #a451f7;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }
`;
export const SameAuthor = styled.div`
  height: max-content;
  background-color: #fff;
  padding: 20px 25px;
  margin-top: 12px;
`;

export const Books = styled.div`
  display: flex;
  align-items: end;
`;

export const BookBox = styled.div`
  height: max-content;
  margin: 15px 17px 15px 0;
  cursor: pointer;
  .thumbnail {
    width: 150px;
    display: flex;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    img {
      width: 100%;
    }
  }
  .title {
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 800;
    color: #242424;
    margin: 12px 0 10px;
  }
  .author {
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 700;
    color: #6f6f6f;
    margin-bottom: 7px;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 350px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #242424;
    margin: 30px 0 30px;
    letter-spacing: -1px;
  }
  p {
    font-size: 15px;
    font-weight: 700;
    color: #6f6f6f;
    margin-bottom: 22px;
    letter-spacing: -1px;
    line-height: 22px;
    text-align: center;
  }
  img {
    margin-bottom: 30px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  .close {
    background-color: #c1c1c1;
    width: 50%;
    color: #242424;
    border: none;
    width: 100%;
    height: 58px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  .subscribe {
    background-color: #ffeb60;
    width: 50%;
    color: #242424;
    border: none;
    width: 100%;
    height: 58px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`;
