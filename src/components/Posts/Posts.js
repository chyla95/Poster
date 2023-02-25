import { Fragment } from "react";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  return (
    <ul className={`${styles["posts"]}`}>
      <Post author="user" message="text..." />
      <Post author="user2" message="text2..." />{" "}
    </ul>
  );
};

export default Posts;
