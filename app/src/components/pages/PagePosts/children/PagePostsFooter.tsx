import Pagination from "@components/molecules/Pagination/Pagination";
import { PageState } from "@components/pages/PagePosts/PagePosts";
import { memo } from "react";

interface PostsFooterProps {
	postsTotal: PageState["postsTotal"];
	currentPage: number;
	onPageChange: (page: number) => void;
}

const PagePostsFooter = memo(
	({ postsTotal, currentPage, onPageChange }: PostsFooterProps) => (
		<div className="posts-footer">
			<Pagination
				total={postsTotal}
				activePage={currentPage}
				onPageChange={onPageChange}
			/>
		</div>
	)
);

export default PagePostsFooter;
