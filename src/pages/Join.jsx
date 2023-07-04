import React, { useState } from "react";
import {
  LoginContainer,
  LoginDiv,
  ImageDiv,
  LoginInput,
  LoginBtn,
  TextBox,
  InputDiv,
} from "../containers/Login/LoginFormSty";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiServer from "../api/api";

const JoinForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const isValidPW = (password) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,15}$/;
    return pwRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPW(pw)) {
      alert("비밀번호는 8-15자 사이의 영문, 특수문자의 조합으로 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `${apiServer}/api/signup`,
        {
          id: id,
          pw: pw,
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("회원가입 성공");
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <ImageDiv></ImageDiv>
      <LoginDiv>
        <TextBox>
          <div className="text1">회원가입</div>
          <div className="text2">
            회원가입하고 한달 무료로 밀리를 체험해보세요!
          </div>
        </TextBox>
        <LoginInput onSubmit={handleSubmit}>
          <InputDiv>
            <div>이름</div>
            <input
              type="text"
              placeholder="이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputDiv>
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
              placeholder="8-15자의 영문 + 특수문자의 조합"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </InputDiv>
          <LoginBtn type="submit">다음</LoginBtn>
        </LoginInput>
      </LoginDiv>
    </LoginContainer>
  );
};

export default JoinForm;
