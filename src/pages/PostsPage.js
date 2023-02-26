import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import Posts from "../components/Posts/Posts";
import { useLoaderData } from "react-router";
import { getPosts } from "../services/posts";
import AddPostModal from "../components/General/Overlays/Modals/AddPostModal";
import styles from "./PostsPage.module.css";

const PostsPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [isAddPostModalVisible, setIsAddPostModalVisible] = useState(false);

  const showAddPostModal = (event) => {
    setIsAddPostModalVisible(true);
  };
  const hideAddPostModal = async (event) => {
    setIsAddPostModalVisible(false);
  };

  // Gets data from the loader defined for the current page
  const posts = useLoaderData();

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
      <Posts posts={posts} />
    </>
  );
};
export default PostsPage;

export const postsLoader = async () => {
  const posts = await getPosts();

  return posts;
};
