import { PropsWithChildren } from "react";
import { Divider } from "rsuite";

const TagBlockquote = ({ children }: PropsWithChildren) => (
  <blockquote className="relative mx-2 my-4 pl-2">
    <Divider
      className="absolute left-0 top-0 m-0 w-1 rounded bg-purple-300"
      vertical
    />

    <div className="blockquote-content ml-2">{children}</div>
  </blockquote>
);

export default TagBlockquote;
