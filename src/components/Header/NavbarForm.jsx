import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Inner,
  Inner2,
  LeftBox,
  Links,
  MainMenu,
  NavbarBox,
  NavbarContainer,
  NavbarContainer2,
  SubMenu,
} from "./NavbarSty";
import Logo from "../../images/MainLogo.png";
import { MainItems } from "./Navbar";

const NavbarForm = () => {
  const [selectMenu, setSelectMenu] = useState("");
  const [selectSub, setSelectSub] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (menu) => {
    setSelectMenu(menu);
  };

  const handleSubClick = (sub) => {
    setSelectSub(sub);
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
    console.log(selectedItem);
  }, [location.pathname]);

  return (
    <NavbarBox>
      <NavbarContainer>
        <Inner>
          <LeftBox>
            <Link to="/main">
              <img src={Logo} alt="Logo" />
            </Link>
            {MainItems.map((item) => (
              <Links to={item.to} key={item.title}>
                <MainMenu
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
      <NavbarContainer2>
        <Inner>
          <Inner2>
            {MainItems.map((item) =>
              selectMenu === item.title
                ? item.subitems.map((i) => (
                    <SubMenu
                      key={i.idx}
                      onClick={() => handleSubClick(i.idx)}
                      selected={selectSub === i.idx}
                    >
                      {i.name}
                    </SubMenu>
                  ))
                : null
            )}
          </Inner2>
        </Inner>
      </NavbarContainer2>
    </NavbarBox>
  );
};

export default NavbarForm;
