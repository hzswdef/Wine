import CKEditor from "@components/ckeditor/CKEditor";
import Paragraph from "@components/paragraphs/Paragraph";
import { TextParagraph as ITextParagraph } from "@interfaces/post/paragraphs";

interface TextParagraphProps {
  paragraph: ITextParagraph;
}

const TextParagraph = ({ paragraph }: TextParagraphProps) => (
  <Paragraph paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
    <CKEditor body={paragraph.body.value} />
  </Paragraph>
);

export default TextParagraph;
