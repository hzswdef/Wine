import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import { memo } from "react";

interface PageTagsHeaderProps {
	error?: string;
}

const PageTagsHeader = memo(({ error }: PageTagsHeaderProps) => (
	<div className="page-tags-header">
		{error && <ErrorMessage>{error}</ErrorMessage>}
	</div>
));

export default PageTagsHeader;
