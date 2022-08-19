const ModalButton = ({ show, setShow, value }) => {
  return (
    <>
      <button className="button mx-auto my-6" onClick={() => setShow(!show)}>
        {value}
      </button>
    </>
  );
};

export default ModalButton;
