import { PropsWithChildren } from "react";

const CKEditorTagUl = ({ children }: PropsWithChildren) => (
	<ul className="list-disc pl-8">{children}</ul>
);

export default CKEditorTagUl;
