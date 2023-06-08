import React from "react";
import {
  BtnBox,
  FreeBtn,
  Inner,
  Links,
  LogoutBtn,
  Menu,
  MenuContainer,
  PhoneUser,
  Subscription,
  UserName,
} from "./ManagementSty";
import PhoneIcon from "../../images/phoneMember.png";
import { ManageList } from "./ManageList";
import { Link, useNavigate } from "react-router-dom";

const ManagementForm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/");
  };
  return (
    <>
      <Inner>
        <PhoneUser>
          <img src={PhoneIcon} alt="휴대폰 아이콘" />
          <p>휴대폰 계정 회원</p>
        </PhoneUser>
        <UserName>
          <p>
            순수한 지식인_123456
            <br />
            독서는 배신하지 않아요!
          </p>
        </UserName>
        <Subscription>
          <div className="subscribe">
            <p className="text1">정기구독을 시작하세요</p>
            <button>
              <p>구독 관리</p>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </div>
          <p className="text2">어려운 독서, 시작하면 습관이 됩니다</p>
        </Subscription>
        <BtnBox>
          <Links to="/product">
            <FreeBtn>무료로 구독 시작하기</FreeBtn>
          </Links>
        </BtnBox>
        <MenuContainer>
          {ManageList.map((item) => (
            <Menu>
              <div key={item.title} className="title">
                {item.title}
              </div>
              {item.content.map((i) => (
                <Links to={i.to}>
                  <div key={i.name} className="name">
                    <p>{i.name}</p>
                    <span class="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </Links>
              ))}
            </Menu>
          ))}
        </MenuContainer>
        <BtnBox>
          <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
        </BtnBox>
      </Inner>
    </>
  );
};

export default ManagementForm;
