import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 25px 5px 25px 20px;
  justify-content: space-around;
`;

export const FeedBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  .feeds {
    width: auto;
    height: max-content;
    border-radius: 10px;
    margin-bottom: 12px;
    margin-right: 13px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06),
      2px 2px 10px rgba(0, 0, 0, 0.04);
    overflow: hidden;
  }
`;

export const Writer = styled.div`
  height: 73px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Users = styled.div`
  display: flex;
  align-items: center;
  .profile {
    width: 48px;
    height: 48px;
    border-radius: 25px;
    border: 2px solid #dfdfdf;
    overflow: hidden;
    img {
      width: 50px;
    }
  }
  .middle {
    margin-left: 10px;
    .name {
      font-size: 14px;
      font-weight: 800;
      color: #242424;
      margin-bottom: 2px;
    }
    .info {
      font-size: 11px;
      font-weight: 700;
      color: #8b8b8b;
    }
  }
`;

export const Image = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
`;
export const Content = styled.div`
  padding: 15px 17px;
  height: 65px;
  letter-spacing: -0.5px;
  .title {
    width: 100%;
    min-width: 330px;
    height: 22px;
    font-size: 15px;
    font-weight: 800;
    color: #242424;
    line-height: 21px;
    margin-bottom: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .contents {
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 800;
    color: #8b8b8b;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /*보여줄 줄의 수를 정함*/
    -webkit-box-orient: vertical; /*box의 배열 방향을 정함*/
  }
`;
export const Recommend = styled.div`
  height: 52px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
    font-weight: 700;
    color: #8b8b8b;
  }
`;
export const Icons = styled.div`
  display: flex;
  .icon {
    width: max-content;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 3px 7px;
    cursor: pointer;
    margin-left: 8px;
  }
  span {
    font-size: 12px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.3);
    margin-left: 2px;
  }
  .material-icons {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.3);
  }
`;
