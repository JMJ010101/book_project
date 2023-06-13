import { styled } from "styled-components";
import Cat from "../../images/고양1.jpg";
import Cat2 from "../../images/고양2.jpg";

export const CateBox = styled.div`
  margin-top: 106px;
  border-bottom: 1px solid #dfdfdf;
  height: 65px;
  display: flex;
  align-items: center;
`;

export const Btns = styled.div`
  width: 1450px;
  margin: 0 auto;
  padding-left: 120px;
`;

export const Btn = styled.button`
  background-color: ${(props) => (props.selected ? "#333333" : "#f7f7f7")};
  color: ${(props) => (props.selected ? "#fff" : "#242424")};
  border: none;
  border-radius: 15px;
  padding: 7px 15px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 7px;
  cursor: pointer;
`;

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid green;
  padding: 25px 20px;
  justify-content: space-around;
`;

export const FeedBox = styled.div`
  width: 330px;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
export const Feeds = styled.div`
  width: 330px;
  height: max-content;
  min-height: 410px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06), 2px 2px 10px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const Feedss = styled.div`
  width: 330px;
  height: max-content;
  min-height: 410px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06), 2px 2px 10px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  background-image: url(${Cat});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-image: url(${Cat2});
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
    content: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTJfMjky%2FMDAxNjcwODQ4MzYyNTYy.QeYlBp0TP6KOWha_zEZnLqY-wQ6jEwZ0jEEVbdbZUP8g.jdK9_uUcbOqKVsSJl6GpN2POuSe-ZFVKiGtpSXIelEEg.JPEG.windysky70%2FIMG_8178.JPG&type=sc960_832");
    img {
      width: 50px;
    }
    &:hover {
      content: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjJfMjg4%2FMDAxNjcxNzE1NjA5NjQ0.ZX9Y8VVOnR763yPGrzNaJszyLVrLztnaaTpSAj7jyqsg.5-iVA1pRhyVokcK0ecPSMEjC8pI8k9J7Be_deV1pPuQg.JPEG.aurak2009%2Fb3dbe323bce9e9e83e98249ac4effc3df48d1a04%25A3%25DF20221216202116.jpg&type=sc960_832");
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

export const FollowBtn = styled.button`
  background-color: ${(props) => (props.selected ? "#c1c1c1" : "#333333")};
  color: ${(props) => (props.selected ? "#242424" : "#fff")};
  font-size: 12px;
  font-weight: 800;
  padding: 8px;
  border: none;
  border-radius: 5px;
`;

export const Image = styled.div`
  img {
    width: 100%;
  }
`;
export const Content = styled.div`
  padding: 15px 17px;
  letter-spacing: -0.5px;
  .title {
    font-size: 15px;
    font-weight: 800;
    color: #242424;
    line-height: 21px;
    margin-bottom: 3px;
  }
  .contents {
    font-size: 13px;
    font-weight: 800;
    color: #8b8b8b;
    line-height: 19px;
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
