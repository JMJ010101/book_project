import React, { useState } from "react";
import { styled } from "styled-components";
import { SelectItem } from "../../containers/Select";
import PhoneImg from "../../images/PhoneImg.png";

const Container = styled.div``;

const SelectBtnContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const Inner = styled.div`
  width: 1100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  color: #333;
  div {
    font-size: 15px;
    width: 50%;
    background-color: ${(props) => (props.selected ? "#f7f7f7" : "white")};
    cursor: pointer;
  }
  img {
    margin-top: 22px;
    width: 30px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`;

const Inner2 = styled.div`
  width: 1100px;
  height: 900px;
  margin: 0 auto;
  display: flex;
`;

const TextBox = styled.div`
  width: 710px;
  height: 100%;
  color: #333;
  .boxes {
    margin-top: 170px;
    height: 65%;
  }
  .icon {
    width: 7%;
    height: 8%;
    background-color: #ffed61;
    border-radius: 50px;
    margin-bottom: 25px;
    img {
      width: 25px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
  .box1 {
    height: 60%;
    .text1 {
      height: 23%;
      font-size: 50px;
      font-weight: bold;
    }
    .text2 {
      height: 77%;
      font-size: 23px;
      font-weight: 500;
      color: #505050;
      line-height: 30px;
    }
  }
  .box2 {
    height: 28%;
    .text1 {
      height: 23%;
      font-size: 23px;
      font-weight: bold;
    }
    .text2 {
      height: 40%;
      font-size: 23px;
    }
    .buttonBox {
      height: 30%;
      button {
        width: 44px;
        height: 23px;
        border-radius: 15px;
        border: none;
        background-color: transparent;
        outline: 1px solid #333;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
`;

const ImageBox = styled.div`
  width: 380px;
  height: 100%;
`;

const Images = styled.div`
  position: relative;
  overflow: hidden;
  width: 99%;
  height: 782px;
  margin-top: 80px;
  border-radius: 70px;
`;

const Selects = () => {
  const [selectedCategory, setSelectedCategory] = useState("오디오북");
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <Container>
      <SelectBtnContainer>
        <Inner>
          {SelectItem.map((item) => (
            <div
              key={item.title}
              onClick={() => handleCategoryClick(item.title)}
              selected={selectedCategory === item.title}
            >
              <img src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </Inner>
      </SelectBtnContainer>
      <ContentContainer>
        <Inner2>
          {SelectItem.map((item) => (
            <>
              {item.contents.map(
                (i) =>
                  selectedCategory === item.title &&
                  selectedNumber === i.number && (
                    <>
                      <TextBox key={i.number}>
                        <div className="boxes">
                          <div className="icon">
                            <img src={item.src} alt={item.src} />
                          </div>
                          <div className="box1">
                            <div className="text1">{item.title}</div>
                            <div className="text2">{item.text}</div>
                          </div>
                          <div className="box2">
                            <div className="text1">{i.function}</div>
                            <div className="text2">{i.content}</div>
                            <div className="buttonBox">
                              {SelectItem.map((item) =>
                                item.title === selectedCategory
                                  ? item.contents.map((i) => (
                                      <button
                                        key={i.number}
                                        onClick={() =>
                                          handleNumberClick(i.number)
                                        }
                                        selected={selectedNumber === i.number}
                                      >
                                        {i.number}
                                      </button>
                                    ))
                                  : null
                              )}
                            </div>
                          </div>
                        </div>
                      </TextBox>
                      <ImageBox>
                        <Images>
                          <img
                            src={i.src}
                            alt={i.src}
                            style={{
                              width: "360px",
                              marginLeft: "7px",
                              position: "absolute",
                            }}
                          />
                          <img
                            src={PhoneImg}
                            alt="phone"
                            style={{
                              width: "380px",
                              position: "absolute",
                            }}
                          />
                        </Images>
                      </ImageBox>
                    </>
                  )
              )}
            </>
          ))}
        </Inner2>
      </ContentContainer>
    </Container>
  );
};

export default Selects;
