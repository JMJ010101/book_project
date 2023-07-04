import React, { useState } from "react";
import {
  ChatBox,
  Header,
  IconDiv,
  InputBox,
  ModalBottom,
  ModalContent,
  Profile,
} from "./ChatBotSty";
import "./ChatScroll.css";
import axios from "axios";

const ChatbotIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatData, setChatData] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  //챗봇
  const ChatbotData = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get("http://192.168.0.157:8000/chatbot", {
        params: {
          query: chatData,
          token: token,
        },
      });
      if (response.data.intent === "검색") {
      }
      if (response.data.intent === "구독 확인") {
      }
      // Add the input and chatbot response to the chat history
      const chatbotResponse = [
        { type: "chatbot", message: response.data.answer },
      ];
      if (response.data.search_results) {
        chatbotResponse.push({
          type: "chatbot",
          message: response.data.search_results,
        });
      }
      if (response.data.date) {
        chatbotResponse.push({
          type: "chatbot",
          message: response.data.date,
        });
      }
      setChatHistory([
        ...chatHistory,
        { type: "user", message: chatData },
        ...chatbotResponse,
      ]);
    } catch (error) {
      console.log(error);
    }
    // Clear the input field
    setChatData("");
  };

  //엔터키 활성화
  const onKeyUp = (event) => {
    // 'enter'키의 keycode는 13
    if (event.keyCode === 13) {
      //input값 가져와서 ChatbotData호출
      ChatbotData();
    }
  };

  const chatbotText =
    " 챗봇 사용 예시입니다.<br /><br /> 1. 책 추천 받기<br />ex) 여행 관련 책 추천해줘 / 찾아줘<br /><br /> 2. 구독 정보 확인 / 취소하기<br />ex) 구독 확인해줘 / 구독 취소해줘<br />";

  return (
    <>
      <IconDiv
        onClick={() => {
          handleModal();
          !isModalOpen ? OpenModal() : CloseModal();
        }}
      >
        <span class="material-icons-outlined">smart_toy</span>
      </IconDiv>
      {isModalOpen && ( // 모달 컴포넌트
        <>
          <ModalContent>
            <Header>
              <Profile>
                <img
                  src="https://d3udu241ivsax2.cloudfront.net/v3/images/brand/simple-logo.41a05d959a43fde14438769b6afa3f19.png"
                  alt="프로필사진"
                />
                <div className="name">밀리</div>
              </Profile>
              <span onClick={CloseModal} class="material-symbols-outlined">
                close
              </span>
            </Header>
            <ChatBox className="chatbox">
              <div className="chatbot-bubble">
                안녕하세요, 밀리캐스트 회원님!
              </div>
              <div
                className="chatbot-bubble"
                dangerouslySetInnerHTML={{ __html: chatbotText }}
              />
              {chatHistory.map((chat, index) => (
                <div
                  className={
                    chat.type === "user" ? "speech-bubble" : "chatbot-bubble"
                  }
                  key={index}
                >
                  {chat.message}
                </div>
              ))}
            </ChatBox>
            <InputBox>
              <input
                type="text"
                placeholder="채팅을 입력해주세요."
                value={chatData}
                onChange={(e) => setChatData(e.target.value)}
                required
                onKeyUp={onKeyUp}
              />
              <button onClick={ChatbotData}>전송</button>
            </InputBox>
          </ModalContent>
          <ModalBottom />
        </>
      )}
    </>
  );
};

export default ChatbotIcon;
