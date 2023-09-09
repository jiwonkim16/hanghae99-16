import { styled } from "styled-components";

export default function ModalWithCloseButton({ close }) {
  return (
    <>
      <BackGround onClick={close} />
      <ModalContainer>
        <ButtonContainer onClick={close}>×</ButtonContainer>
        <Content>
          <h1>Title</h1>
          <p>Message</p>
        </Content>
      </ModalContainer>
    </>
  );
}

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1000;
  background-color: white;
  width: 350px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
`;

const Content = styled.div`
  line-height: 1.5;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const ButtonContainer = styled.div`
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
