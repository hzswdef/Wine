import PageHome from "@components/pages/PageHome/PageHome";
import PageNotFound from "@components/pages/PageNotFound/PageNotFound";
import PagePost from "@components/pages/PagePost/PagePost";
import PagePosts from "@components/pages/PagePosts/PagePosts";
import PageTag from "@components/pages/PageTag/PageTag";
import PageTags from "@components/pages/PageTags/PageTags";
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
					element: <PageHome />
				},
				{
					path: "/posts/:page?",
					element: <PagePosts />
				},
				{
					path: "/post/:id",
					element: (
						<PostContextProvider>
							<PagePost />
						</PostContextProvider>
					)
				},
				{
					path: "/tags",
					element: <PageTags />
				},
				{
					path: "/tag/:tag/:page?",
					element: <PageTag />
				},
				{
					path: "*",
					element: <PageNotFound />
				}
			]
		}
	];

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default Router;
