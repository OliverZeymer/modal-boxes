import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import modalContext from "./contexts/modalContext";
import Modal from "./Modal";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <modalContext.Provider value={{ modal, setModal }}>
      <div className="App">
        <Button />
        <AnimatePresence>{modal && <Modal />}</AnimatePresence>
      </div>
    </modalContext.Provider>
  );
}

export default App;
