import useModal from "../../hook/useModal";
import ModalWithButtons from "./ModalWithButtons";
import ModalWithCloseButton from "./ModalWithCloseButton";

export default function TestModal() {
  const modalWithBtns = useModal();
  const modalWithCloseBtn = useModal();

  return (
    <div>
      <h1>Modal</h1>

      <button onClick={modalWithBtns.open}>Open Modal (Buttons)</button>
      {modalWithBtns.isOpen && <ModalWithButtons close={modalWithBtns.close} />}

      <button onClick={modalWithCloseBtn.open}>
        Open Modal (Close Button)
      </button>
      {modalWithCloseBtn.isOpen && (
        <ModalWithCloseButton close={modalWithCloseBtn.close} />
      )}
    </div>
  );
}
