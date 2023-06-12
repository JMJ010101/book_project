import React, { useState } from "react";
import { ModalContent, ModalWrapper } from "../Search/searchSty";
import { ModalButton } from "./PaymentSty";

const PaymentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <h2>dkdkdkd</h2>
          <button onClick={closeModal}>확인</button>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default PaymentModal;
