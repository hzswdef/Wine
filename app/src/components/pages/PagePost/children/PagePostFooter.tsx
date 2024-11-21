import Share from "@components/molecules/Share/Share";
import Tags from "@components/molecules/Tags/Tags";
import Post from "@interfaces/post/post";
import { memo } from "react";

interface PostFooterProps {
	title: Post["title"];
	tags: Post["tags"];
}

const PagePostFooter = memo(({ title, tags }: PostFooterProps) => (
	<div className="post-footer">
		{tags && <Tags appearance="primary" className="my-4" tags={tags} />}

		<Share shareTitle={title} />
	</div>
));

export default PagePostFooter;
