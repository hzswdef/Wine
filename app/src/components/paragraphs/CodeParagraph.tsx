import "@components/paragraphs/CodeParagraph.scss";

import Paragraph from "@components/paragraphs/Paragraph";
import { CodeParagraph as ICodeParagraph } from "@interfaces/post/paragraphs";
import CopyIcon from "@rsuite/icons/Copy";
import { memo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { isMobile } from "react-device-detect";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { Heading, Popover, Whisper } from "rsuite";

interface CodeParagraphProps {
  paragraph: ICodeParagraph;
}

const CodeParagraph = memo(({ paragraph }: CodeParagraphProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <Paragraph paragraph={paragraph} anchorTitle={paragraph.anchor_title}>
      {isMobile && (
        <Whisper
          placement="top"
          controlId="code-paragraph-title"
          trigger="click"
          speaker={<Popover className="text-nowrap">{paragraph.title}</Popover>}
        >
          <Heading
            level={4}
            className="title mb-2 overflow-hidden overflow-ellipsis font-bold leading-6"
          >
            {paragraph.title}
          </Heading>
        </Whisper>
      )}

      {!isMobile && (
        <Heading
          level={4}
          className="title mb-2 overflow-hidden overflow-ellipsis font-bold leading-6"
        >
          {paragraph.title}
        </Heading>
      )}

      <div className="code-block relative text-xs">
        <SyntaxHighlighter
          style={a11yDark}
          language={paragraph.language}
          showLineNumbers
        >
          {paragraph.body}
        </SyntaxHighlighter>

        <Whisper
          placement="top"
          controlId="code-copy-to-clipboard"
          trigger="hover"
          speaker={
            <Popover className="text-base">
              {copied ? "Copied to clipboard!" : "Copy"}
            </Popover>
          }
        >
          <div className="copy-to-clipboard absolute right-1 top-1 cursor-pointer">
            <CopyToClipboard
              text={paragraph.body}
              onCopy={() => setCopied(true)}
            >
              <CopyIcon className="m-2" />
            </CopyToClipboard>
          </div>
        </Whisper>
      </div>
    </Paragraph>
  );
});

export default CodeParagraph;
