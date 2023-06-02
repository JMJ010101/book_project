import { styled } from "styled-components";

export const RoadContainer = styled.div`
  border: 1px solid blue;
`;

export const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 500px;
`;
export const Writing = styled.p`
  padding: 0 20px;
  font-weight: 700;
  font-size: 13px;
  color: #6f6f6f;
`;

export const Roads = styled.div`
  height: 380px;
  border: 1px solid green;
  padding: 20px 20px 0 20px;
  display: flex;
`;

export const MainRoad = styled.div`
  width: 250px;
  height: 365px;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  .girl {
    width: 100%;
  }
  .title {
    position: absolute;
    left: 25px;
    top: 22px;
    width: 200px;
  }
  .text {
    position: absolute;
    left: 25px;
    top: 270px;
    width: 200px;
    color: white;
    font-size: 16px;
    font-weight: 800;
  }
  .small {
    position: absolute;
    display: flex;
    left: 25px;
    top: 330px;
    width: 200px;
    color: white;
    font-size: 13px;
    font-weight: 800;
    .material-symbols-outlined {
      font-size: 13px;
    }
  }
`;

export const Road = styled.div`
  width: 325px;
  height: 365px;
  border: 1px solid #ddd;
  margin-left: 15px;
  border-radius: 10px;
  .thumbnail {
    height: 100px;
    background-color: #ddd;
  }
  .info {
    height: 25px;
    display: flex;
    padding: 15px 0 0 15px;
    .gray {
      background-color: #efefef;
      color: #555555;
      width: max-content;
      height: max-content;
      margin-right: 3px;
      font-size: 10px;
      font-weight: 700;
      padding: 5px 3px;
      border-radius: 5px;
    }
  }
  .titleWriter {
    height: 65px;
  }
  .point {
    height: 135px;
    border-top: 1px solid #8b8b8b;
    padding: 10px;
    background-color: #eee;
  }
`;
