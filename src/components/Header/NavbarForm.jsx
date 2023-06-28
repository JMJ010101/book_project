import React, { useEffect, useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarForm2 = () => {
  const [selectMenu, setSelectMenu] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (menu) => {
    setSelectMenu(menu);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/");
  };

  // Update the selected menu based on the current path
  React.useEffect(() => {
    const pathname = location.pathname;
    const selectedItem = MainItems.find((item) => item.to === pathname);
    if (selectedItem) {
      setSelectMenu(selectedItem.title);
    }
  }, [location.pathname]);

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
