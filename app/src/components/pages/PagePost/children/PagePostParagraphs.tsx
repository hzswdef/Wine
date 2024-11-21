import CodeParagraph from "@components/molecules/Paragraphs/CodeParagraph/CodeParagraph";
import LinksParagraph from "@components/molecules/Paragraphs/LinksParagraph/LinksParagraph";
import SectionParagraph from "@components/molecules/Paragraphs/SectionParagraph/SectionParagraph";
import TextParagraph from "@components/molecules/Paragraphs/TextParagraph/TextParagraph";
import Post from "@interfaces/post/post";
import { memo, useMemo } from "react";
import { Placeholder } from "rsuite";

interface PostParagraphsProps {
	placeholder: boolean;
	paragraphs: Post["paragraphs"] | undefined;
}

const PagePostParagraphs = memo(
	({ placeholder, paragraphs }: PostParagraphsProps) => {
		const PlaceholderComponent = useMemo(() => {
			if (placeholder) {
				return (
					<>
						<Placeholder.Paragraph rows={1} rowHeight={28} className="my-8" />
						<Placeholder.Paragraph rows={6} />
						<Placeholder.Paragraph rows={1} rowHeight={28} className="my-10" />
						<Placeholder.Paragraph rows={8} />
						<Placeholder.Paragraph rows={1} rowHeight={28} className="my-10" />
						<Placeholder.Paragraph rows={6} />
					</>
				);
			}

			return <></>;
		}, [placeholder]);

		return (
			<div className="post-paragraphs">
				{placeholder && PlaceholderComponent}

				{!placeholder &&
					paragraphs &&
					paragraphs.map(paragraph => {
						switch (paragraph.type) {
							case "Paragraph - Section":
								return (
									<SectionParagraph key={paragraph.id} paragraph={paragraph} />
								);
							case "Paragraph - Text":
								return (
									<TextParagraph key={paragraph.id} paragraph={paragraph} />
								);
							case "Paragraph - Code":
								return (
									<CodeParagraph key={paragraph.id} paragraph={paragraph} />
								);
							case "Paragraph - Links":
								return (
									<LinksParagraph key={paragraph.id} paragraph={paragraph} />
								);
						}
					})}
			</div>
		);
	}
);

export default PagePostParagraphs;
