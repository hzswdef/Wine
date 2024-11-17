import Base from "@components/Base";
import PostContextProvider from "@contexts/PostContextProvider";
import NotFound from "@pages/error/NotFound";
import Home from "@pages/home/Home";
import Post from "@pages/post/Post";
import Posts from "@pages/posts/Posts";
import Tag from "@pages/tag/Tag";
import Tags from "@pages/tags/Tags";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from "react-router-dom";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/posts/:page?",
          element: <Posts />
        },
        {
          path: "/post/:id",
          element: (
            <PostContextProvider>
              <Post />
            </PostContextProvider>
          )
        },
        {
          path: "/tags",
          element: <Tags />
        },
        {
          path: "/tag/:tag/:page?",
          element: <Tag />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
