import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* 블러 처리 정도를 조절 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;

const OpenModal = styled.button`
  background-color: #55efc4;
  font-weight: 400;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;

  &:active {
    background-color: rgba(28, 35, 51, 0.5);
    border: none;
  }
`;
const OpenOtherModal = styled.button`
  border: 2px solid #fab1a0;
  margin-top: 15px;
  color: #d63063;
  padding: 10px 35px;
  background-color: white;
  border-radius: 10px;
  &:active {
    background-color: #dddddd;
  }
`;

const FirstModal = styled.div`
  width: 80%;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
  border: 4px solid #dddddd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  span {
    display: block;
    margin-bottom: 100px;
  }
  button {
    float: right;
  }
`;
const ConfirmBtn = styled.button`
  background-color: #55efc4;
  font-weight: 400;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
`;
const CloseBtn = styled.button`
  background-color: #fab1a0;
  padding: 10px 20px;
  border: none;
  color: red;
  border-radius: 10px;
  margin-right: 5px;
  &:active {
    background-color: rgba(214, 48, 99, 0.5);
    border: none;
  }
`;

const OtherModal = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
  border: 4px solid #dddddd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  span {
    display: block;
  }
  button {
    position: absolute;
    bottom: 85%;
    left: 90%;
    border-radius: 50%;
    border: 2px solid #dddddd;
    padding: 5px 10px;
  }
`;

function Modal() {
  const [openModal, setOpenModal] = useState(false);
  const [openOtherModal, setOpenOtherModal] = useState(false);

  const openBtn = () => {
    setOpenModal(true);
  };
  const openOtherBtn = () => {
    setOpenOtherModal(true);
  };
  const closeBtn = () => {
    setOpenModal(false);
  };
  const closeOtherBtn = () => {
    setOpenOtherModal(false);
  };
  return (
    <>
      <ModalWrapper
        style={{ display: openModal || openOtherModal ? "flex" : "none" }}
        onClick={closeOtherBtn}
      />
      <div>
        <h1>Modal</h1>
        <div>
          <OpenModal onClick={openBtn}>open modal</OpenModal>
          <FirstModal style={{ display: openModal ? "block" : "none" }}>
            <span>
              닫기와 확인버튼 2개가 있고,
              <br /> 외부 영역을 눌러도 모달이 닫히지 않아요
            </span>
            <ConfirmBtn>확인</ConfirmBtn>
            <CloseBtn onClick={closeBtn}>닫기</CloseBtn>
          </FirstModal>
          <OpenOtherModal onClick={openOtherBtn}>open modal</OpenOtherModal>
          <div>
            <OtherModal style={{ display: openOtherModal ? "block" : "none" }}>
              <span>
                닫기버튼 1개가 있고,
                <br /> 외부 영역을 누르면 모달이 닫혀요.
              </span>
              <button onClick={closeOtherBtn}>x</button>
            </OtherModal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
