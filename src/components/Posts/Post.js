import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={`${styles["post"]}`}>
      <p className={`${styles["author"]}`}>{props.author}</p>
      <p className={`${styles["message"]}`}>{props.message}</p>
    </li>
  );
};

export default Post;
