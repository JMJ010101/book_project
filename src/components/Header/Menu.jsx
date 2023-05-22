import React from "react";
import { styled } from "styled-components";
import { menuItems } from "../../containers/Header";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  width: 100%;
  box-shadow: 0 4px 4px -4px #bbb;
  height: ${(props) => (props.toggle ? "330px" : "60px")};
  transition: height 0.4s;
  background-color: white;
  position: relative;
  overflow: hidden;
`;

export const MenuDiv = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  padding: 25px;
  font-size: 16px;
  font-weight: bold;
  display: block;
  color: #333;
`;

const Menu = ({ toggle }) => {
  return (
    <MenuContainer toggle={toggle}>
      <MenuDiv>
        {menuItems.map((item) => (
          <MenuLink to={item.to}>{item.text}</MenuLink>
        ))}
      </MenuDiv>
    </MenuContainer>
  );
};

export default Menu;
