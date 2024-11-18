import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import PostInfoItem from "@components/molecules/PostInfoItem/PostInfoItem";
import dateFormat from "@helpers/dateFormat";
import Post from "@interfaces/post/post";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { memo, useMemo } from "react";

interface PostPageHeaderProps {
	summary: Post["summary"]["processed"];
	created: Post["created"];
}

const PostPageHeader = memo(({ summary, created }: PostPageHeaderProps) => {
	const dateNumFormat = useMemo(() => {
		return dateFormat(created, "MM/DD/YYYY");
	}, [created]);

	const dateStringFormat = useMemo(() => {
		return dateFormat(created, "MMMM D, YYYY");
	}, [created]);

	return (
		<div className="post-header">
			<div className="post-summary text my-4">
				<CKEditorBody body={summary} />
			</div>

			<div className="post-info">
				<PostInfoItem
					text={dateNumFormat}
					popover={<>{dateStringFormat}</>}
					icon={CalenderDateIcon}
				/>
			</div>
		</div>
	);
});

export default PostPageHeader;
