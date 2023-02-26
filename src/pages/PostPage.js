import PostDetails from "../components/Posts/PostDetails";
import { useLoaderData } from "react-router";
import { getPost } from "../services/posts";

const PostPage = () => {
  const post = useLoaderData();

  return <PostDetails post={post} />;
};
export default PostPage;

export const postLoader = async ({ params }) => {
  const postId = params.postId;
  const post = await getPost(postId);

  return post;
};
