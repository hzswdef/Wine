import CodeParagraph from "@components/molecules/Paragraphs/CodeParagraph/CodeParagraph";
import LinksParagraph from "@components/molecules/Paragraphs/LinksParagraph/LinksParagraph";
import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase";
import TextParagraph from "@components/molecules/Paragraphs/TextParagraph/TextParagraph";
import { SectionParagraph as ISectionParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";

interface SectionParagraphProps {
	paragraph: ISectionParagraph;
}

const SectionParagraph = memo(({ paragraph }: SectionParagraphProps) => (
	<ParagraphBase paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
		{paragraph.paragraphs.map(paragraph => {
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
	</ParagraphBase>
));

export default SectionParagraph;
