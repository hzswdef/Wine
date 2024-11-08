import Base from "@components/Base";
import PostContextProvider from "@contexts/PostContextProvider";
import Home from "@pages/home/Home";
import Post from "@pages/post/Post";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: (
            <PostContextProvider>
              <Post />
            </PostContextProvider>
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
