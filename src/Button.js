import { useContext } from "react";
import modalContext from "./contexts/modalContext";
const Button = () => {
  const { modal, setModal } = useContext(modalContext);
  return (
    <>
      <button className="button mx-auto my-6" onClick={() => setModal(!modal)}>
        Open Modal
      </button>
    </>
  );
};

export default Button;
