import { styled } from "styled-components";

export const SlideContainer = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 106px;
  overflow: hidden;
`;

export const ContainerBlur = styled.div`
  width: 100%;
  background-image: url("https://d2j6uvfek9vas1.cloudfront.net/hero_banner/6476aeb1dec44.jpg");
  background-position: 50%;
  background-size: cover;
  transform: scale(1.08);
  background-repeat: no-repeat;
  filter: blur(30px) brightness(80%);
  height: 280px;
  position: absolute;
`;

export const SlideImg = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 32px;
  position: absolute;
`;

export const Boxes = styled.div`
  width: max-content;
  display: flex;
  margin: 0 auto;
`;

export const ImgBox = styled.div`
  width: 500px;
  height: 277px;
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 100%;
    position: 0% 50%;
  }
`;

export const TextBox = styled.div`
  width: 300px;
  height: 277px;
  margin-left: 35px;
  position: relative;
  .badge {
    background-color: white;
    width: max-content;
    padding: 5px 8px;
    font-size: 10px;
    border-radius: 10px;
    margin-top: 25px;
  }
  .text {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 800;
    color: white;
    line-height: 27px;
  }
  .moveBar {
    width: 220px;
    .moveBar1 {
      border-top: 1px solid white;
    }
    .moveBar2 {
      border-top: 1px solid white;
      opacity: 0.3;
      width: 220px;
    }
  }
  .number {
    font-weight: 800;
    font-size: 13px;
    color: white;
  }
  .icon {
    background-color: white;
    border-radius: 15px;
    width: 25px;
    height: 25px;
    opacity: 0.3;
    cursor: pointer;
  }
  .material-icons {
    position: absolute;
    color: white;
    right: 5px;
    font-size: 17px;
    cursor: pointer;
  }
`;

export const MoveDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  justify-content: space-between;
`;
