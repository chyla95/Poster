import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={`${styles["post"]}`}>
      <p className={`${styles["author"]}`}>{props.post.author}</p>
      <p className={`${styles["message"]}`}>{props.post.message}</p>
    </li>
  );
};

export default Post;
