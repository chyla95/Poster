import Posts from "../components/Posts/Posts";
import { useLoaderData } from "react-router";
import { getPosts } from "../services/posts";

const PostsPage = () => {
  // Gets data from the loader defined for the current page
  const posts = useLoaderData();

  return <Posts posts={posts} />;
};
export default PostsPage;

export const postsLoader = async () => {
  const posts = await getPosts();

  return posts;
};
