import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import PostInfoItem from "@components/molecules/PostInfoItem/PostInfoItem";
import dateFormat from "@helpers/dateFormat";
import Post from "@interfaces/post/post";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { memo, useMemo } from "react";
import { Placeholder } from "rsuite";

interface PostPageHeaderProps {
	placeholder: boolean;
	summary?: Post["summary"]["processed"];
	created?: Post["created"];
}
const PagePostHeader = memo(
	({ placeholder, summary, created }: PostPageHeaderProps) => {
		const dateNumFormat = useMemo(() => {
			if (!placeholder) {
				return dateFormat(created, "MM/DD/YYYY");
			}

			return "";
		}, [created, placeholder]);

		const dateStringFormat = useMemo(() => {
			if (!placeholder) {
				return dateFormat(created, "MMMM D, YYYY");
			}

			return "";
		}, [created, placeholder]);

		return (
			<div className="post-header">
				<div className="post-summary text my-4">
					{placeholder && (
						<>
							<Placeholder.Paragraph rows={3} />
						</>
					)}

					{!placeholder && summary && <CKEditorBody body={summary} />}
				</div>

				<div className="post-info">
					{placeholder && (
						<Placeholder.Paragraph rows={1} rowHeight={8} className="w-24" />
					)}

					{!placeholder && (
						<PostInfoItem
							text={dateNumFormat}
							popover={<>{dateStringFormat}</>}
							icon={CalenderDateIcon}
						/>
					)}
				</div>
			</div>
		);
	}
);

export default PagePostHeader;
