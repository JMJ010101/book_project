import { styled } from "styled-components";
export const Inner = styled.div`
  max-width: 1310px;
  height: 350px;
  background-color: #fafaf6;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 70px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 50px;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
`;

export const LeftBox = styled.div`
  display: flex;
  height: max-content;
`;

export const ProfileImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 45px;
  border: 2px solid #dfdfdf;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
export const User = styled.div`
  margin: 15px 0 0 20px;
  height: max-content;
  .name {
    font-size: 25px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 13px;
  }
  .subscribe {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #8b8b8b;
    span {
      cursor: pointer;
    }
  }
`;
export const Menu = styled.div`
  height: max-content;
  margin-top: 25px;
  span {
    font-size: 30px;
    cursor: pointer;
  }
`;

export const EndContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export const TextBox = styled.div`
  .favorite {
    display: flex;
    align-items: center;
    color: #8b8b8b;
    margin: 50px 0 10px;
    img {
      width: 22px;
      margin-right: 2px;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 800;
    color: #6f6f6f;
    margin-left: 5px;
  }
`;

export const ImageBox = styled.div`
  margin-right: 30px;
  transform: rotate(15deg);
  box-shadow: 7px 3px 12px rgba(0, 0, 0, 0.25);
  img {
    width: 110px;
  }
`;
export const Inner2 = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

export const CategoryBox = styled.div`
  position: sticky;
  top: 65px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px -15px 30px -10px rgba(0, 0, 0, 0.15);
`;

export const CateInner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

export const BtnBox = styled.div`
  margin-left: 70px;
`;

export const CategoryBtn = styled.button`
  background-color: transparent;
  color: #242424;
  border: none;
  border-bottom: 3px solid #333;
  padding: 14px 0;
  font-size: 18px;
  font-weight: bold;
  margin-right: 30px;
  cursor: pointer;
`;

export const BookContainer = styled.div`
  height: max-content;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 25px 45px;
`;

export const Options = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #8b8b8b;
  padding: 10px 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.div``;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  .material-symbols-outlined {
    font-size: 26px;
    cursor: pointer;
    transition: all ease 0.7s;
    &:hover {
      transform: rotate(-90deg);
    }
  }
`;

export const SortBox = styled.div`
  width: ${(props) => (props.expanded ? "520px" : "146px")};
  height: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 3;
  padding: 5px 0;
  border-radius: 5px;
  background-color: #fff;
  .material-icons-outlined {
    cursor: pointer;
    margin-right: 10px;
    font-size: 20px;
  }
  .filter {
    color: #8b8b8b;
    padding: 10px;
    margin-left: 15px;
    width: max-content;
    height: 20px;
    cursor: pointer;
    white-space: nowrap;
  }
  p {
    color: #6f6f6f;
    padding: 5px;
    margin-left: 30px;
    width: max-content;
    height: 20px;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const Settings = styled.span`
  cursor: pointer;
`;

export const Books = styled.div`
  display: flex;
  align-items: end;
  flex-wrap: wrap;
`;

export const BookBox = styled.div`
  height: max-content;
  margin: 15px 18px 15px 0;
  opacity: ${(props) => (props.clickSetting ? 0.5 : 1)};
  position: relative;
  cursor: pointer;
  .thumbnail {
    width: 152px;
    display: flex;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    img {
      width: 100%;
    }
    .material-symbols-outlined {
      position: absolute;
      top: 37%;
      left: 39%;
      font-size: 40px;
      font-weight: 700;
      color: white;
      cursor: pointer;
      &:hover {
        animation: vibration 0.05s 10;
        animation-direction: alternate;
      }
    }
  }

  @keyframes vibration {
    from {
      transform: rotate(7deg);
    }
    to {
      transform: rotate(-7deg);
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
