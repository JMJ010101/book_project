import React, { useState } from "react";
import {
  Inner,
  LeftBox,
  Links,
  MainMenu,
  NavbarBox2,
  NavbarContainer,
} from "./NavbarSty";
import Logo from "../../images/MainLogo.png";
import { MainItems } from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavbarForm2 = () => {
  const [selectMenu, setSelectMenu] = useState("투데이");
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setSelectMenu(menu);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/");
  };
  return (
    <NavbarBox2>
      <NavbarContainer>
        <Inner>
          <LeftBox>
            <Link to="/main">
              <img src={Logo} alt="Logo" />
            </Link>
            {MainItems.map((item) => (
              <Links to={item.to}>
                <MainMenu
                  key={item.title}
                  onClick={() => handleMenuClick(item.title)}
                  selected={selectMenu === item.title}
                >
                  {item.title}
                </MainMenu>
              </Links>
            ))}
          </LeftBox>
          <button onClick={handleLogout}>로그아웃</button>
        </Inner>
      </NavbarContainer>
    </NavbarBox2>
  );
};

export default NavbarForm2;
