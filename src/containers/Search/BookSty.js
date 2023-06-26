import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookSection = styled.section`
  padding: 1px;
  height: 250px;
  width: 150px;
  margin: center;
  display: flex;
  cursor: pointer;
  flex-direction: column; /* 추가 */
`;

export const BookImage = styled.img`
  height: 200px;
  width: 150px;
  margin-bottom: 5px; /* 수정 */
`;

export const RightSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-content: stretch;
  flex-direction: column; /* 추가 */
`;

export const BookInfoLabel = styled.label`
  margin: 0;
  color: gray;
`;
export const BookInfoText = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  margin-bottom: 10px; /* 수정 */
`;
export const BookTitle = styled.section`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: bold;
`;

export const BookAuthor = styled.section`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #242424;
`;
