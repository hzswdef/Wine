import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase";
import { TextParagraph as ITextParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";

interface TextParagraphProps {
	paragraph: ITextParagraph;
}

const TextParagraph = memo(({ paragraph }: TextParagraphProps) => (
	<ParagraphBase paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
		<CKEditorBody body={paragraph.body.value} />
	</ParagraphBase>
));

export default TextParagraph;
