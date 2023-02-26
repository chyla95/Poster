import { useNavigate } from "react-router";
import styles from "./Post.module.css";

const Post = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    const postId = props.post.id;
    navigate(`/post/${postId}`);
  };

  return (
    <li className={`${styles["post"]}`} onClick={clickHandler}>
      <p className={`${styles["author"]}`}>{props.post.author}</p>
      <p className={`${styles["message"]}`}>{props.post.message}</p>
    </li>
  );
};

export default Post;
