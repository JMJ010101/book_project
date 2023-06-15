import { styled } from "styled-components";

export const CategoryBox = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  background-color: #fff;
`;

export const CateInner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

export const BtnBox = styled.div`
  margin-left: 120px;
  padding: 17px 0;
`;

export const CategoryBtn = styled.button`
  background-color: ${(props) => (props.selected ? "#333333" : "f7f7f7")};
  color: ${(props) => (props.selected ? "#fff" : "#242424")};
  border: none;
  border-radius: 20px;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 800;
  margin-right: 10px;
  cursor: pointer;
`;

export const Inner = styled.div`
  max-width: 1450px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  background-color: #f6f6f6;
  margin-top: -2px;
`;

export const BookContainer = styled.div`
  height: max-content;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 35px 45px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  color: #333333;
  padding: 10px;
  margin-bottom: 30px;
`;

export const Books = styled.div`
  display: flex;
  align-items: end;
  flex-wrap: wrap;
`;

export const ShelfBox = styled.div`
  height: 500px;
  background-color: #fff;
`;
