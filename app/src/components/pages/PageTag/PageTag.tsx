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

export interface PageTagState {
	loading: boolean;
	posts: Post[];
	total: number;
}

const PageTag = () => {
	const { tag, page } = useParams();

	const updateTitle = useTitle();

	const [tagPageState, setTagPageState] = useState<PageTagState>({
		loading: true,
		posts: [],
		total: 0
	});
	const [error, setError] = useState<string | undefined>();

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

			// @TODO Display error when specified unknown tag.
			PostsClient.getPostsByTag(tag, offset)
				.then(response => {
					setTagPageState({
						loading: false,
						posts: response.data.data,
						total: response.data.meta.count
					});
				})
				.catch(() => {
					setError("Something went wrong. Please try again later.");
				});
		}
	}, [currentPage, tag, updateTitle]);

	const onPageChange = (page: number) => {
		setTagPageState(prevState => {
			return {
				...prevState,
				loading: true
			};
		});

		navigate(`/tag/${tag}/${page}`);

		if (anchorRef?.current) {
			anchorRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	};

	return (
		<PageBase page="tag" title={<>{tag} - Tag</>} className="capitalize">
			{error && <ErrorMessage>{error}</ErrorMessage>}

			<div ref={anchorRef} className="tag-anchor scroll-mt-48"></div>
			<PageTagContent
				posts={tagPageState.posts}
				loading={tagPageState.loading}
			/>
			<PageTagFooter
				paginationTotal={tagPageState.total}
				paginationActivePage={currentPage}
				paginationOnPageChange={onPageChange}
			/>
		</PageBase>
	);
};

export default PageTag;
