import { useState } from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    // To update component's state correctly, it is required to pass a nested function as the setClicks argument.
    // The function automatically gets previous state as an argument, so "previousState" === "clicks"
    setClicks((previousState) => {
      return previousState + 1;
    });
  };

  return (
    <li className={`${styles["post"]}`} onClick={clickHandler}>
      <p className={`${styles["author"]}`}>{props.post.author}</p>
      <p className={`${styles["message"]}`}>{props.post.message}</p>
      <p className={`${styles["clicks"]}`}>
        <b>Clicks:</b> {clicks}
      </p>
    </li>
  );
};

export default Post;
