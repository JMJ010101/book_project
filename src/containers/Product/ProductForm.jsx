import React, { useState } from "react";
import {
  Back,
  Border,
  BtnBox,
  Check,
  Notice,
  NoticeBox,
  Option,
  Options,
  Price,
  ProductBg,
  ProductContainer,
  Tag,
  TextBox,
} from "./ProductSty";
import { NoticeItem, ProductItem } from "./ProductList";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [selectOption, setSelectOption] = useState("월 9,900원");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectOption(option);
  };

  const handleBack = () => {
    navigate("/management");
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <ProductBg>
        <p>
          언제든 해지 가능
          <br />
          일단 다시 시작하세요
        </p>
        <img
          src="https://d3udu241ivsax2.cloudfront.net/v3/images/payment/book-3d.a7da63d193c00bf2504969632ecc1f57.png"
          alt="책"
        />
      </ProductBg>
      <Back>
        <span onClick={handleBack} class="material-symbols-outlined">
          arrow_back_ios
        </span>
      </Back>

      <ProductContainer>
        {ProductItem.map((item) => (
          <>
            <TextBox key={item.title}>
              <div className="text1">{item.title}</div>
              <div className="text2">{item.text}</div>
            </TextBox>
            <Options>
              {item.options.map((i) => (
                <Option onClick={() => handleOptionClick(i.price)}>
                  <Border selected={selectOption === i.price} />
                  <Check selected={selectOption === i.price} />
                  <Price key={i.price}>
                    <div className="text1">{i.period}</div>
                    <div className="text2">
                      <span className="fee">{i.price}</span>
                      <span className="month">{i.month}</span>
                    </div>
                  </Price>
                  <Tag key={i.price}>
                    <div className="tags">{i.tag1}</div>
                    <div className="tags">{i.tag2}</div>
                  </Tag>
                </Option>
              ))}
            </Options>
          </>
        ))}
        <NoticeBox>
          {NoticeItem.map((item) => (
            <Notice key={item.title}>
              <div className="title">{item.title}</div>
              {item.content.map((i) => (
                <div key={item.title} className="content">
                  {i.con}
                </div>
              ))}
            </Notice>
          ))}
        </NoticeBox>
      </ProductContainer>
      <BtnBox>
        <button className="button2" onClick={handlePayment}>
          <p>0원으로 시작하기</p>
        </button>
      </BtnBox>
    </>
  );
};

export default ProductForm;
