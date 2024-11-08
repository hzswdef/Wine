import { PropsWithChildren } from "react";

const TagUl = ({ children }: PropsWithChildren) => (
  <ul className="list-disc pl-8">{children}</ul>
);

export default TagUl;
