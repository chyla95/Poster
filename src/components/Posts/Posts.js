import useFetch from "../../hooks/use-fetch";
import { getPosts } from "../../services/posts";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const { data: posts, isLoading: isGettingPosts } = useFetch(getPosts);

  let FetchedPosts = <p>Posts are not available!</p>;
  if (isGettingPosts) FetchedPosts = <p>Loading posts...</p>;
  if (!isGettingPosts && posts)
    FetchedPosts = posts.map((p) => <Post key={p.id} post={p} />);

  return <ul className={`${styles["posts"]}`}>{FetchedPosts}</ul>;
};

export default Posts;
