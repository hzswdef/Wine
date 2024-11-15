import TagA from "@components/ckeditor/tags/TagA";
import TagBlockquote from "@components/ckeditor/tags/TagBlockquote";
import TagCode from "@components/ckeditor/tags/TagCode";
import TagHr from "@components/ckeditor/tags/TagHr";
import TagOl from "@components/ckeditor/tags/TagOl";
import TagUl from "@components/ckeditor/tags/TagUl";
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
          return <TagA href={domNode.attribs.href}>{children}</TagA>;
        case "hr":
          return <TagHr />;
        case "blockquote":
          return <TagBlockquote>{children}</TagBlockquote>;
        case "ul":
          return <TagUl>{children}</TagUl>;
        case "ol":
          return <TagOl>{children}</TagOl>;
        case "code":
          return <TagCode>{children}</TagCode>;
      }
    }
  },
};

const CKEditor = memo(({ body }: CKEditorProps) => {
  const parsedBody = useMemo(() => {
    return parse(body, parserOptions);
  }, [body]);

  return <div>{parsedBody}</div>;
});

export default CKEditor;
