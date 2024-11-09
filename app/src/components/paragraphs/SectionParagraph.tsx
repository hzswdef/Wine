import CodeParagraph from "@components/paragraphs/CodeParagraph";
import LinksParagraph from "@components/paragraphs/LinksParagraph";
import Paragraph from "@components/paragraphs/Paragraph";
import TextParagraph from "@components/paragraphs/TextParagraph";
import { SectionParagraph as ISectionParagraph } from "@interfaces/post/paragraphs";

interface SectionParagraphProps {
  paragraph: ISectionParagraph;
}

const SectionParagraph = ({ paragraph }: SectionParagraphProps) => (
  <Paragraph paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
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
  </Paragraph>
);

export default SectionParagraph;
