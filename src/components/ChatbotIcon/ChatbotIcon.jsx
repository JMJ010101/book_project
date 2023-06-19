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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const ChatbotData = async () => {
    console.log(chatData);

    try {
      const response = await axios.get("http://192.168.0.157:8000/chatbot", {
        params: {
          query: chatData,
        },
      });
      console.log(response.data["answer"]);
      if (response.data.intent === "검색") {
        console.log(response.data.search_results);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

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
              <div className="speech-bubble">안녕 뭐 물어봐도 돼?</div>
              <div className="speech-bubble">
                안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕
                뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?
              </div>
              <div className="chatbot-bubble">웅 물어봐</div>
              <div className="speech-bubble">
                안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕
                뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?
              </div>
              <div className="chatbot-bubble">웅 물어봐</div>
              <div className="speech-bubble">
                안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕
                뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?
              </div>
              <div className="chatbot-bubble">웅 물어봐</div>
              <div className="speech-bubble">
                안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕
                뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?안녕 뭐 물어봐도 돼?
              </div>
            </ChatBox>
            <InputBox>
              <input
                type="text"
                placeholder="채팅을 입력해주세요."
                value={chatData}
                onChange={(e) => setChatData(e.target.value)}
                required
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
