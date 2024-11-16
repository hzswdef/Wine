import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase.tsx";
import { TextParagraph as ITextParagraph } from "@interfaces/post/paragraphs.ts";
import { memo } from "react";
import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody.tsx";

interface TextParagraphProps {
  paragraph: ITextParagraph;
}

const TextParagraph = memo(({ paragraph }: TextParagraphProps) => (
  <ParagraphBase paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
    <CKEditorBody body={paragraph.body.value} />
  </ParagraphBase>
));

export default TextParagraph;
