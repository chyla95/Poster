import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  return (
    <>
      <ul className={`${styles["posts"]}`}>
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
