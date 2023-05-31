import React, { useState } from "react";
import {
  LoginContainer,
  LoginDiv,
  ImageDiv,
  LoginInput,
  LoginBtn,
  TextBox,
  Options,
  Links,
  OrDiv,
  Buttons,
} from "./LoginFormSty";
import { OptionItem } from "./../../containers/Login/LoginPage";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 DB에 연결하는 로직을 작성합니다.
    // id와 password 변수를 사용하여 DB와 통신하고 인증 로직을 수행할 수 있습니다.
  };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div className="text1">독서와 무제한 친해지리</div>
          <div className="text2">12만 권 속에서 인생책을 찾아보세요</div>
        </TextBox>
        <LoginInput onSubmit={handleSubmit}>
          <input
            type="id"
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginInput>
        <Options>
          {OptionItem.map((item) => (
            <li key={item.title}>
              <Links to={item.to}>{item.title}</Links>
            </li>
          ))}
        </Options>
        <OrDiv>
          <div className="line"></div>
          <div className="or">또는</div>
          <div className="line"></div>
        </OrDiv>
        <Buttons>
          <img
            src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/kakao-icon.9c9940291430ca6ad83b9ae1f3cc81a8.svg"
            alt="카카오로 로그인"
          />
          <img
            src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/naver-icon.7128d171ea0b01233bb4b32a2b5ad260.svg"
            alt="네이버로 로그인"
          />
          <img
            src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/facebook-icon.f3e1fcc7af9f4cac5be2179a846417f8.svg"
            alt="페이스북으로 로그인"
          />
          <img
            src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/apple-icon.c88b92e286a1d29bcf581e12ac076d44.svg"
            alt="Apple로 로그인"
          />
          <img
            src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/google-icon.4f89e46a7f4be2551c6b2ab781be474d.svg"
            alt="Google로 로그인"
          />
        </Buttons>
      </LoginDiv>
    </LoginContainer>
  );
};

export default LoginForm;
