import { useContext } from "react";
import popupContext from "../contexts/popupContext";
const ConfirmButton = (props) => {
  const { popup, setPopup } = useContext(popupContext);
  return (
    <button className="button mx-auto my-6" onClick={() => setPopup(!popup)}>
      {props.value}
    </button>
  );
};

export default ConfirmButton;
