import { PropsWithChildren } from "react";

const TagCode = ({ children }: PropsWithChildren) => (
  <code className="rounded-md border border-neutral-600 bg-neutral-700 px-1 py-0.5 text-xs font-mono">
    {children}
  </code>
);

export default TagCode;
