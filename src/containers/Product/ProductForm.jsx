import React, { useState } from "react";
import {
  Back,
  BtnBox,
  Check,
  Option,
  Options,
  PaymentBtn,
  Price,
  ProductBg,
  ProductContainer,
  Tag,
  TextBox,
} from "./ProductSty";
import { ProductItem } from "./ProductList";
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
  return (
    <>
      <ProductBg>
        <p>
          언제든 해지 가능
          <br />
          일단 다시 시작하세요
        </p>
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
                <Option
                  onClick={() => handleOptionClick(i.price)}
                  selected={selectOption === i.price}
                >
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
      </ProductContainer>
      <BtnBox>
        <PaymentBtn>0원으로 시작하기</PaymentBtn>
      </BtnBox>
    </>
  );
};

export default ProductForm;
