import { clsx } from "clsx";
import { PropsWithChildren } from "react";

const CKEditorTagCode = ({ children }: PropsWithChildren) => (
  <code
    className={clsx(
      "rounded-md border border-neutral-600 bg-neutral-700 px-1 py-0.5",
      "font-mono text-xs text-white text-opacity-90",
    )}
  >
    {children}
  </code>
);

export default CKEditorTagCode;
