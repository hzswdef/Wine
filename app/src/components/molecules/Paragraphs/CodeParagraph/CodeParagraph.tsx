import "@components/molecules/Paragraphs/CodeParagraph/CodeParagraph.scss";

import CodeParagraphContent from "@components/molecules/Paragraphs/CodeParagraph/children/CodeParagraphContent";
import CodeParagraphTitle from "@components/molecules/Paragraphs/CodeParagraph/children/CodeParagraphTitle";
import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase";
import { CodeParagraph as ICodeParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";

interface CodeParagraphProps {
	paragraph: ICodeParagraph;
}

const CodeParagraph = memo(({ paragraph }: CodeParagraphProps) => (
	<ParagraphBase paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
		<CodeParagraphTitle title={paragraph.title} />
		<CodeParagraphContent language={paragraph.language} body={paragraph.body} />
	</ParagraphBase>
));

export default CodeParagraph;
