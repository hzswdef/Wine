import Home from "@components/pages/Home/Home";
import NotFound from "@components/pages/NotFound/NotFound";
import Post from "@components/pages/Post/Post";
import Posts from "@components/pages/Posts/Posts";
import Tag from "@components/pages/Tag/Tag";
import Tags from "@components/pages/Tags/Tags";
import Layout from "@components/templates/Layout/Layout";
import PostContextProvider from "@contexts/PostContext/PostContextProvider";
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider
} from "react-router-dom";

const Router = () => {
	const routes: RouteObject[] = [
		{
			path: "/",
			element: <Layout />,
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
