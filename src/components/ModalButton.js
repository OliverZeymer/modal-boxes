import { useContext } from "react";
import modalContext from "../contexts/modalContext";
const ModalButton = (props) => {
  const { modal, setModal } = useContext(modalContext);
  return (
    <>
      <button className="button mx-auto my-6" onClick={() => setModal(!modal)}>
        {props.value}
      </button>
    </>
  );
};

export default ModalButton;
