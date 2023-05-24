import React from "react";
import { styled } from "styled-components";
import { menuItems } from "../../containers/Header";
import { Link } from "react-router-dom";
import "./Menu.css";
// export const MenuContainer = styled.div`
//   width: 100%;
//   box-shadow: 0 4px 4px -4px #bbb;
//   height: ${(props) => (props.toggle ? "330px" : "60px")};
//   transition: height 0.4s;
//   background-color: white;
//   position: relative;
//   overflow: hidden;
// `;

// export const MenuDiv = styled.div`
//   width: 100%;
//   margin-top: 60px;
//   text-align: center;
// `;

// export const MenuLink = styled(Link)`
//   text-decoration: none;
//   padding: 25px;
//   font-size: 16px;
//   font-weight: bold;
//   display: block;
//   color: #333;
// `;

const Menu = ({ toggle }) => {
  const menuContainer = `MenuContainer ${toggle ? "toggle" : ""}`;

  return (
    <div className={menuContainer}>
      <div className="MenuDiv">
        {menuItems.map((item) => (
          <Link className="MenuLink" to={item.to} key={item.text}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
