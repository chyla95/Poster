import AddPost from "../../../Posts/AddPost";
import styles from "./AddPostModal.module.css";
import Backdrop from "../Backdrop";

const AddPostModal = (props) => {
  const modal = (
    <Backdrop onClick={props.hideAddPostModal}>
      <div className={`${styles["modal"]}`}>
        <AddPost onSubmit={props.hideAddPostModal} />
      </div>
    </Backdrop>
  );

  return props.isVisible && modal;
};

export default AddPostModal;
