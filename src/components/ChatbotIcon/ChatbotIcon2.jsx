import React, { useState } from "react";
import {
  ChatBox,
  Header,
  IconDiv,
  IconDiv2,
  InputBox,
  ModalBottom,
  ModalContent,
  Profile,
} from "./ChatBotSty";
import "./ChatScroll.css";

const ChatbotIcon2 = () => {
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

  return (
    <>
      <IconDiv
        style={{ marginBottom: "50px" }}
        onClick={() => {
          handleModal();
          !isModalOpen ? OpenModal() : CloseModal();
        }}
      >
        <span class="material-icons-outlined">smart_toy</span>
      </IconDiv>
      {isModalOpen && ( // 모달 컴포넌트
        <>
          <ModalContent style={{ marginBottom: "50px" }}>
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
              <button>전송</button>
            </InputBox>
          </ModalContent>
          <ModalBottom style={{ marginBottom: "50px" }} />
        </>
      )}
    </>
  );
};

export default ChatbotIcon2;
