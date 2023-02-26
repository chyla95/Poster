import { createBrowserRouter } from "react-router-dom";
import RootLayout, { rootLoader } from "./layouts/RootLayout";
import PostPage, { postLoader } from "./pages/PostPage";
import PostsPage, { postsLoader } from "./pages/PostsPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      { path: "/", element: <PostsPage />, loader: postsLoader },
      { path: "/post/:postId", element: <PostPage />, loader: postLoader },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
