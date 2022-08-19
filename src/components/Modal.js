import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";
const Modal = ({ show, setShow }) => {
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
  /* eslint-disable */
  const escapeDown = useCallback((event) => {
    if (event.keyCode === 27) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={() => setShow(!show)}
          tabIndex="-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 backdrop-blur bg-black/75 flex justify-center items-center opacity-100 transition-opacity-500"
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            initial={{ x: "100vh", y: "100vw" }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: "100vh", y: "100vw" }}
            transition={{ duration: 0.6 }}
            className="relative transition-transform-500 flex justify-between bg-white shadow-2xl rounded-3xl p-16"
          >
            <h1 className="text-5xl">Message sent!</h1>
            <button
              onClick={function () {
                setShow(!show);
              }}
              className="button p-1 border-none text-3xl absolute top-1 right-3 bg-transparent"
            >
              <RiCloseCircleLine
                color="red"
                className="hover:scale-125 duration-300"
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
