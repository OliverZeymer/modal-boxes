import { useState } from "react";
import ModalButton from "./components/ModalButton";
import ConfirmButton from "./components/ConfirmButton";
import Modal from "./components/Modal";
import ConfirmBox from "./components/ConfirmBox";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  return (
    <div className="App">
      <ModalButton show={modalShow} setShow={setModalShow} value="Open Modal" />
      <Modal show={modalShow} setShow={setModalShow} />
      <ConfirmButton
        show={confirmShow}
        setShow={setConfirmShow}
        value="Open Dialog"
      />
      <ConfirmBox show={confirmShow} setShow={setConfirmShow} />
    </div>
  );
}

export default App;
