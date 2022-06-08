import styles from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Overley = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["content"]}>{props.children}</div>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("overley")
      )}
      {ReactDOM.createPortal(
        <Overley>{props.children}</Overley>,
        document.getElementById("overley")
      )}
    </Fragment>
  );
};
export default Modal;
