import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody.tsx";
import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase.tsx";
import { TextParagraph as ITextParagraph } from "@interfaces/post/paragraphs.ts";
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
