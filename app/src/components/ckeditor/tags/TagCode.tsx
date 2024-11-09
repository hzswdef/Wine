import { PropsWithChildren } from "react";

const TagCode = ({ children }: PropsWithChildren) => (
  <code className="rounded-md border border-neutral-600 bg-neutral-700 px-1 py-0.5 font-mono text-xs">
    {children}
  </code>
);

export default TagCode;
