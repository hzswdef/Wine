import CodeParagraph from "@components/molecules/Paragraphs/CodeParagraph/CodeParagraph";
import LinksParagraph from "@components/molecules/Paragraphs/LinksParagraph/LinksParagraph";
import SectionParagraph from "@components/molecules/Paragraphs/SectionParagraph/SectionParagraph";
import TextParagraph from "@components/molecules/Paragraphs/TextParagraph/TextParagraph";
import Post from "@interfaces/post/post";
import { memo } from "react";

interface PostParagraphsProps {
	paragraphs: Post["paragraphs"];
}

const PostPageParagraphs = memo(({ paragraphs }: PostParagraphsProps) => (
	<div className="post-paragraphs">
		{paragraphs.map(paragraph => {
			switch (paragraph.type) {
				case "Paragraph - Section":
					return <SectionParagraph key={paragraph.id} paragraph={paragraph} />;
				case "Paragraph - Text":
					return <TextParagraph key={paragraph.id} paragraph={paragraph} />;
				case "Paragraph - Code":
					return <CodeParagraph key={paragraph.id} paragraph={paragraph} />;
				case "Paragraph - Links":
					return <LinksParagraph key={paragraph.id} paragraph={paragraph} />;
			}
		})}
	</div>
));

export default PostPageParagraphs;
