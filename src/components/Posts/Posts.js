import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import AddPostModal from "../General/Overlays/Modals/AddPostModal";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const { token } = useSelector((state) => state.auth);
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState(false);

  const showAddPostModal = (event) => {
    setIsAddPostModalVisible(true);
  };
  const hideAddPostModal = async (event) => {
    setIsAddPostModalVisible(false);
  };

  return (
    <>
      <AddPostModal
        isVisible={isAddPostModalVisible}
        hideAddPostModal={hideAddPostModal}
      />

      {token && (
        <button className={styles["button"]} onClick={showAddPostModal}>
          <MdPostAdd size={18} />
          Add Post
        </button>
      )}

      <ul className={`${styles["posts"]}`}>
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
