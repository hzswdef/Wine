import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import PostInfoItem from "@components/molecules/PostInfoItem/PostInfoItem";
import Tags from "@components/molecules/Tags/Tags";
import dateFormat from "@helpers/dateFormat";
import Post from "@interfaces/post/post";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { clsx } from "clsx";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Divider, Heading, Placeholder } from "rsuite";

interface PostTeaserBaseProps {
	limitTags?: boolean | number;
}

type PostTeaserProps =
	| (PostTeaserBaseProps & { placeholder: true; post?: never })
	| (PostTeaserBaseProps & { placeholder?: false; post: Post });

const PostTeaser = memo(({ post, limitTags, placeholder }: PostTeaserProps) => {
	const dateNumFormat = useMemo(() => {
		if (placeholder) {
			return dateFormat(new Date(), "MM/DD/YYYY");
		}

		return dateFormat(post.created, "MM/DD/YYYY");
	}, [placeholder, post?.created]);

	const dateStringFormat = useMemo(() => {
		if (placeholder) {
			return dateFormat(new Date(), "MMMM D, YYYY");
		}

		return dateFormat(post.created, "MMMM D, YYYY");
	}, [placeholder, post?.created]);

	return (
		<div className="post-teaser mb-6">
			{placeholder && (
				<Placeholder.Paragraph rows={1} rowHeight={16} className="mb-4 mt-2" />
			)}

			{!placeholder && (
				<Link to={`/post/${post.id}`} replace>
					<Heading level={2}>{post.title}</Heading>
				</Link>
			)}

			<div className="post-summary mb-3 mt-2">
				{placeholder && (
					<Placeholder.Paragraph rows={3} className="mb-4 mt-2" />
				)}

				{!placeholder && <CKEditorBody body={post.summary.processed} />}
			</div>

			<div
				className={clsx(
					"post-teaser-footer flex",
					!placeholder && "flex-col gap-4 xl:flex-row"
				)}
			>
				{placeholder && (
					<Placeholder.Paragraph rows={1} rowHeight={8} className="basis-24" />
				)}

				{!placeholder && (
					<PostInfoItem
						text={dateNumFormat}
						popover={<>{dateStringFormat}</>}
						icon={CalenderDateIcon}
					/>
				)}

				{placeholder && (
					<Placeholder.Paragraph
						rows={1}
						rowHeight={8}
						className="ml-6 basis-48"
					/>
				)}

				{!placeholder && post.tags && (
					<Tags appearance="secondary" limitTags={limitTags} tags={post.tags} />
				)}
			</div>

			<Divider />
		</div>
	);
});

export default PostTeaser;
