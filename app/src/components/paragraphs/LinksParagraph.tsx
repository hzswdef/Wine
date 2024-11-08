import Paragraph from "@components/paragraphs/Paragraph";
import { LinksParagraph as ILinksParagraph } from "@interfaces/post/paragraphs";
import { Link } from "react-router-dom";

interface LinksParagraphProps {
  paragraph: ILinksParagraph;
}

const LinksParagraph = (props: LinksParagraphProps) => {
  const { paragraph } = props;

  return (
    <Paragraph paragraph={paragraph} anchorTitle="Links">
      {paragraph.field_links.map(link => (
        <Link key={link.title} to={link.uri} replace>
          {link.title}
        </Link>
      ))}
    </Paragraph>
  );
};

export default LinksParagraph;
