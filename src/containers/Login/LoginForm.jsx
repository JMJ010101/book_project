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
  InputDiv,
} from "./LoginFormSty";
import { OptionItem } from "./LoginPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiServer from "../../api/api";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiServer}/api/login`, {
        id,
        pw,
      });
      const token = response.data.token;
      const name = response.data.name;
      const subscribe = response.data.subscribe;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("subscribe", subscribe);
      alert("로그인 성공");
      navigate("/main");
    } catch (error) {
      alert("아이디나 비밀번호를 다시 확인해주세요.");
      console.log(error);
    }
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
          <InputDiv>
            <div>아이디</div>
            <input
              type="id"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <div>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </InputDiv>
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginInput>
        <Options>
          {OptionItem.map((item) => (
            <li key={item.title}>
              <Links to={item.to}>{item.title}</Links>
            </li>
          ))}
        </Options>
      </LoginDiv>
    </LoginContainer>
  );
};

export default LoginForm;
