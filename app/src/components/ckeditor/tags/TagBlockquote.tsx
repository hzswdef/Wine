import { PropsWithChildren } from "react";
import { Divider } from "rsuite";

const TagBlockquote = ({ children }: PropsWithChildren) => (
  <blockquote className="my-4 mx-2 pl-2 relative">
    <Divider className="absolute left-0 top-0 w-1 rounded m-0 bg-purple-300" vertical />

    <div className="blockquote-content ml-2">
      {children}
    </div>
  </blockquote>
);

export default TagBlockquote;
