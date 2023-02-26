import styles from "./AuthenticationModal.module.css";
import Backdrop from "../Backdrop";
import Authenticate from "../../../Authentication/Authenticate";

const AuthenticationModal = (props) => {
  const modal = (
    <Backdrop onClick={props.hide}>
      <div className={`${styles["modal"]}`}>
        <Authenticate onSubmit={props.hide} />
      </div>
    </Backdrop>
  );

  return props.isVisible && modal;
};

export default AuthenticationModal;
