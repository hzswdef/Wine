import CKEditorTagA from "@components/atoms/CKEditorTags/CKEditorTagA/CKEditorTagA";
import CKEditorTagBlockquote from "@components/atoms/CKEditorTags/CKEditorTagBlockquote/CKEditorTagBlockquote";
import CKEditorTagCode from "@components/atoms/CKEditorTags/CKEditorTagCode/CKEditorTagCode";
import CKEditorTagHr from "@components/atoms/CKEditorTags/CKEditorTagHr/CKEditorTagHr";
import CKEditorTagOl from "@components/atoms/CKEditorTags/CKEditorTagOl/CKEditorTagOl";
import CKEditorTagUl from "@components/atoms/CKEditorTags/CKEditorTagUl/CKEditorTagUl";
import { ElementType } from "domelementtype";
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";
import { memo, useMemo } from "react";

interface CKEditorProps {
  body: string;
}

const tagsToReplace = ["a", "hr", "blockquote", "ul", "ol", "code"];

const parserOptions: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (
      domNode.type === ElementType.Tag &&
      tagsToReplace.includes(domNode.tagName.toLowerCase())
    ) {
      const children = domToReact(domNode.children as DOMNode[], parserOptions);

      switch (domNode.tagName) {
        case "a":
          return (
            <CKEditorTagA href={domNode.attribs.href}>{children}</CKEditorTagA>
          );
        case "hr":
          return <CKEditorTagHr />;
        case "blockquote":
          return <CKEditorTagBlockquote>{children}</CKEditorTagBlockquote>;
        case "ul":
          return <CKEditorTagUl>{children}</CKEditorTagUl>;
        case "ol":
          return <CKEditorTagOl>{children}</CKEditorTagOl>;
        case "code":
          return <CKEditorTagCode>{children}</CKEditorTagCode>;
      }
    }
  },
};

const CKEditorBody = memo(({ body }: CKEditorProps) => {
  const parsedBody = useMemo(() => {
    return parse(body, parserOptions);
  }, [body]);

  return <div>{parsedBody}</div>;
});

export default CKEditorBody;
