import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import useFetch from "../../hooks/use-fetch";
import { getPosts } from "../../services/posts";
import AddPostModal from "../General/Overlays/Modals/AddPostModal";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const { data: posts, isLoading: isGettingPosts } = useFetch(getPosts);
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState(false);

  const showAddPostModal = (event) => {
    setIsAddPostModalVisible(true);
  };
  const hideAddPostModal = async (event) => {
    setIsAddPostModalVisible(false);
  };

  let FetchedPosts = <p>Posts are not available!</p>;
  if (isGettingPosts) FetchedPosts = <p>Loading posts...</p>;
  if (!isGettingPosts && posts)
    FetchedPosts = posts.map((p) => <Post key={p.id} post={p} />);

  return (
    <>
      <AddPostModal
        isVisible={isAddPostModalVisible}
        hideAddPostModal={hideAddPostModal}
      />
      <button className={styles["button"]} onClick={showAddPostModal}>
        <MdPostAdd size={18} />
        Add Post
      </button>
      <ul className={`${styles["posts"]}`}>{FetchedPosts}</ul>
    </>
  );
};

export default Posts;
