import { CodeParagraph } from "@interfaces/post/paragraphs";
import CopyIcon from "@rsuite/icons/Copy";
import { memo, useMemo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { Popover, Whisper } from "rsuite";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", tsx);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("json", json);

interface CodeParagraphContentProps {
	language: CodeParagraph["language"];
	body: CodeParagraph["body"];
}

const CodeParagraphContent = memo(
	({ language, body }: CodeParagraphContentProps) => {
		const [copied, setCopied] = useState<boolean>(false);

		const popoverText: string = useMemo(() => {
			return copied ? "Copied to clipboard!" : "Copy";
		}, [copied]);

		return (
			<div className="code-block relative text-xs">
				<SyntaxHighlighter style={a11yDark} language={language} showLineNumbers>
					{body}
				</SyntaxHighlighter>

				<Whisper
					placement="top"
					controlId="code-copy-to-clipboard"
					trigger="hover"
					speaker={<Popover className="text-base">{popoverText}</Popover>}
				>
					<div className="copy-to-clipboard absolute right-1 top-1 cursor-pointer">
						<CopyToClipboard text={body} onCopy={() => setCopied(true)}>
							<CopyIcon className="m-2" />
						</CopyToClipboard>
					</div>
				</Whisper>
			</div>
		);
	}
);

export default CodeParagraphContent;
