import { PropsWithChildren } from "react";

const TagOl = ({ children }: PropsWithChildren) => (
  <ul className="list-decimal pl-8">{children}</ul>
);

export default TagOl;
