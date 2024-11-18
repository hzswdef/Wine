import LinksParagraphItem from "@components/molecules/Paragraphs/LinksParagraph/children/LinksParagraphItem";
import ParagraphBase from "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase";
import { LinksParagraph as ILinksParagraph } from "@interfaces/post/paragraphs";
import { memo } from "react";

interface LinksParagraphProps {
	paragraph: ILinksParagraph;
}

const LinksParagraph = memo(({ paragraph }: LinksParagraphProps) => (
	<ParagraphBase paragraph={paragraph} anchorTitle="Links">
		<ul className="list-disc pl-8">
			{paragraph.field_links.map(link => (
				<LinksParagraphItem
					key={link.title}
					title={link.title}
					uri={link.uri}
				/>
			))}
		</ul>
	</ParagraphBase>
));

export default LinksParagraph;
