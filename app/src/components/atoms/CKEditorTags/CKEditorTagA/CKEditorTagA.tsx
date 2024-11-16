import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface TagAProps {
  href: string;
}

const TagA = ({ href, children }: PropsWithChildren<TagAProps>) => (
  <Link to={href}>{children}</Link>
);

export default TagA;
