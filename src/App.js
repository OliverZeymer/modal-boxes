import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ModalButton from "./components/ModalButton";
import ConfirmButton from "./components/ConfirmButton";
import modalContext from "./contexts/modalContext";
import Modal from "./components/Modal";
import popupContext from "./contexts/popupContext";
import ConfirmBox from "./components/ConfirmBox";
function App() {
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  return (
    <modalContext.Provider value={{ modal, setModal }}>
      <popupContext.Provider value={{ popup, setPopup }}>
        <div className="App">
          <ModalButton value="Open Modal" />
          <Modal />
          <ConfirmButton value="Open Dialog" />
          <ConfirmBox />
        </div>
      </popupContext.Provider>
    </modalContext.Provider>
  );
}

export default App;
