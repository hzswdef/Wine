import Pagination from "@components/molecules/Pagination/Pagination.tsx";
import PostTeaser from "@components/post/PostTeaser";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import Post from "@interfaces/post/post";
import NotFound from "@pages/error/NotFound";
import Page from "@pages/Page";
import { createRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Message } from "rsuite";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

interface PostsState {
	posts: Post[];
	total: number;
}

const Tag = () => {
	const { tag, page } = useParams();

	const updateTitle = useTitle();

	const [posts, setPosts] = useState<PostsState | null>(null);
	const [error, setError] = useState<string | null>(null);

	const anchorRef = createRef<HTMLDivElement>();

	const navigate = useNavigate();

	const currentPage: number = page ? +page : 1;

	useEffect(() => {
		if (tag) {
			updateTitle(tag.charAt(0).toUpperCase() + tag.slice(1));

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
		return (
			<Message type="error" showIcon>
				{error}
			</Message>
		);
	}

	if (!posts) {
		return <>Loading</>;
	}

	if (posts.posts.length === 0) {
		return <NotFound />;
	}

	return (
		<Page page="tag" title={`"${tag}" Tag`} className="capitalize">
			<div ref={anchorRef} className="tag-anchor scroll-mt-48"></div>

			{posts.posts.length > 0 &&
				posts.posts.map(post => <PostTeaser key={post.id} post={post} />)}

			<Pagination
				total={posts.total || 0}
				activePage={currentPage}
				onPageChange={onPageChange}
			/>
		</Page>
	);
};

export default Tag;
