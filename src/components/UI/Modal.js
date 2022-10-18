import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import closeModal from "../../store/modal-action";
const Backdrop = () => {
  const dispatch = useDispatch();
  const { didSubmit } = useSelector((state) => state.checkout);
  const onClickHandler = () => {
    dispatch(closeModal(didSubmit));
  };
  return <div className={classes.backdrop} onClick={onClickHandler} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
