import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

function Modal() {
  const [openModal, setOpenModal] = useState(false);
  const [openOtherModal, setOpenOtherModal] = useState(false);
  const outSection = useRef();
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
    <div>
      <h1>Modal</h1>
      <div>
        <button onClick={openBtn}>open modal</button>
        <div style={{ display: openModal ? "block" : "none" }}>
          <span>
            닫기와 확인버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요
          </span>
          <button onClick={closeBtn}>닫기</button>
          <button>확인</button>
        </div>
        <button onClick={openOtherBtn}>open modal</button>
        <div
          ref={outSection}
          style={{ display: openOtherModal ? "block" : "none" }}
          onClick={(e) => {
            if (outSection.current === e.target) {
              setOpenOtherModal(true);
            } else {
              setOpenOtherModal(false);
            }
          }}
        >
          <span>닫기버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</span>
          <button onClick={closeOtherBtn}>x</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
