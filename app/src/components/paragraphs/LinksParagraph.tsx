import Paragraph from "@components/paragraphs/Paragraph";
import { LinksParagraph as ILinksParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";
import { Link } from "react-router-dom";

interface LinksParagraphProps {
  paragraph: ILinksParagraph;
}

const LinksParagraph = memo(({ paragraph }: LinksParagraphProps) => (
  <Paragraph paragraph={paragraph} anchorTitle="Links">
    <ul className="list-disc pl-8">
      <li>
        {paragraph.field_links.map(link => (
          <Link
            key={link.title}
            to={link.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </Link>
        ))}
      </li>
    </ul>
  </Paragraph>
));

export default LinksParagraph;
