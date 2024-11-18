import { CodeParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Heading, Popover, Whisper } from "rsuite";

interface CodeParagraphTitleProps {
	title: CodeParagraph["title"];
}

const CodeParagraphTitle = memo(({ title }: CodeParagraphTitleProps) => (
	<>
		<MobileView>
			<Whisper
				placement="top"
				controlId="code-paragraph-title"
				trigger="click"
				speaker={<Popover className="text-nowrap">{title}</Popover>}
			>
				<Heading
					level={4}
					className="title mb-2 overflow-hidden overflow-ellipsis font-bold leading-6"
				>
					{title}
				</Heading>
			</Whisper>
		</MobileView>

		<BrowserView>
			<Heading
				level={4}
				className="title mb-2 overflow-hidden overflow-ellipsis font-bold leading-6"
			>
				{title}
			</Heading>
		</BrowserView>
	</>
));

export default CodeParagraphTitle;
