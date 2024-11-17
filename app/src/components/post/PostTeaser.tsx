import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import Tags from "@components/post/Tags";
import dateFormat from "@helpers/dateFormat";
import Post from "@interfaces/post/post";
import PostInfoItem from "@pages/post/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Divider, Heading } from "rsuite";

interface PostTeaserProps {
	post: Post;
	limitTags?: boolean | number;
}

const PostTeaser = memo(({ post, limitTags }: PostTeaserProps) => {
	const dateNumFormat = useMemo(() => {
		return dateFormat(post.created, "MM/DD/YYYY");
	}, [post.created]);

	const dateStringFormat = useMemo(() => {
		return dateFormat(post.created, "MMMM D, YYYY");
	}, [post.created]);

	return (
		<div className="post-teaser mb-6">
			<Link to={`/post/${post.id}`} replace>
				<Heading level={2}>{post.title}</Heading>
			</Link>

			<div className="post-summary mb-3 mt-2">
				<CKEditorBody body={post.summary.processed} />
			</div>

			<div className="post-teaser-footer flex flex-col gap-4 xl:flex-row">
				<PostInfoItem
					text={dateNumFormat}
					popover={<>{dateStringFormat}</>}
					icon={CalenderDateIcon}
				/>

				{post.tags && (
					<Tags appearance="secondary" limitTags={limitTags} tags={post.tags} />
				)}
			</div>

			<Divider />
		</div>
	);
});

export default PostTeaser;
