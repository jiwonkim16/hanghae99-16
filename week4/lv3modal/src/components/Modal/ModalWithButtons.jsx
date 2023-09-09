import { styled } from "styled-components";

export default function ModalWithButtons({ close }) {
  return (
    <>
      <BackGround />

      <ModalContainer>
        <Content>
          <h1>Title</h1>
          <p>Message</p>
        </Content>
        <Buttons>
          <Button color={"red"} onClick={close}>
            Cancel
          </Button>
          <Button color={"green"}>OK</Button>
        </Buttons>
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
  /* z-index: 1000; */
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 350px;
  border-radius: 1rem;
  background-color: white;
  padding: 30px;
  user-select: none;
  box-shadow: 0 0 10px #bbb;
`;

const Content = styled.div`
  line-height: 1.5;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.color === "green") return "#74ba89";
    if (props.color === "red") return "#ef7a4f";
  }};
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 0px 10px #bbb;
  }
`;
