import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import popupContext from "../contexts/popupContext";

const ConfirmBox = () => {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0,
      },
    },
  };
  const { popup, setPopup } = useContext(popupContext);

  /* eslint-disable */
  const escapeDown = useCallback((event) => {
    if (event.keyCode === 27) {
      setPopup(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
  }, []);
  /* eslint-enable */
  const [confirm, setConfirm] = useState();
  function handleYes() {
    setConfirm(true);
  }
  function handleNo() {
    setConfirm(false);
  }

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          onClick={() => setPopup(!popup)}
          tabIndex="-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 backdrop-blur bg-black/75 flex justify-center items-center"
        >
          <p className="absolute top-0 text-white text-center text-6xl">{confirm?.toString()}</p>
          <motion.section
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            initial={{ x: "100vh", y: "100vw", scale: 0 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            exit={{ x: "100vh", y: "100vw", scale: 0 }}
            transition={{ duration: 0.6 }}
            className="relative transition-transform-500 flex flex-col justify-between bg-white shadow-2xl rounded-3xl p-16"
          >
            <h1 className="text-3xl">Are you sure you wanna do that?</h1>

            <div className="flex justify-evenly mt-8">
              <button onClick={handleYes} className="button bg-blue-500 border-blue-500 hover:text-blue-500 hover:border-blue-500">
                Yes
              </button>
              <button onClick={handleNo} className="button bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500">
                No
              </button>
            </div>
            <button
              onClick={function () {
                setPopup(!popup);
              }}
              className="button p-1 border-none text-3xl absolute top-1 right-3 bg-transparent text-red-500 hover:text-red-900 rounded-full"
            >
              <RiCloseCircleLine color="red" className="hover:scale-125 duration-300" />
            </button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmBox;
