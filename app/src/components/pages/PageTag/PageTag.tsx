import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import PageBase from "@components/pages/PageBase/PageBase";
import PageTagContent from "@components/pages/PageTag/children/PageTagContent";
import PageTagFooter from "@components/pages/PageTag/children/PageTagFooter";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import Post from "@interfaces/post/post";
import { createRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

interface PostsState {
	posts: Post[];
	total: number;
}

const PageTag = () => {
	const { tag, page } = useParams();

	const updateTitle = useTitle();

	const [posts, setPosts] = useState<PostsState | null>(null);
	const [error, setError] = useState<string | null>(null);

	const anchorRef = createRef<HTMLDivElement>();

	const navigate = useNavigate();

	const currentPage: number = page ? +page : 1;

	useEffect(() => {
		// Capitalize the first letter of each word in the tag.
		if (tag) {
			const title: string = tag
				.split(" ")
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
			updateTitle(title);

			const offset: number = (currentPage - 1) * pageLimit;

			PostsClient.getPostsByTag(tag, offset)
				.then(response => {
					setPosts({
						posts: response.data.data,
						total: response.data.meta.count
					});
				})
				.catch(() => {
					setError("Something went wrong. Please try again later.");
				});
		}
	}, [tag, page, currentPage, updateTitle]);

	const onPageChange = (page: number) => {
		navigate(`/tag/${tag}/${page}`);

		if (anchorRef?.current) {
			anchorRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	};

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}

	if (!posts) {
		return <>Loading</>;
	}

	return (
		<PageBase page="tag" title={`"${tag}" Tag`} className="capitalize">
			<div ref={anchorRef} className="tag-anchor scroll-mt-48"></div>
			<PageTagContent posts={posts.posts} />
			<PageTagFooter
				paginationTotal={posts.total}
				paginationActivePage={currentPage}
				paginationOnPageChange={onPageChange}
			/>
		</PageBase>
	);
};

export default PageTag;
