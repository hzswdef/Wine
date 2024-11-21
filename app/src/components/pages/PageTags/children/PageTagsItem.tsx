import { Taxonomy } from "@interfaces/taxonomy";
import { clsx } from "clsx";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Panel, Placeholder } from "rsuite";

type TagsItemProps =
	| { placeholder?: false; tag: Taxonomy }
	| { placeholder: true; tag?: never };

const PageTagsItem = memo(({ tag, placeholder }: TagsItemProps) => {
	const tagLinkName = useMemo(() => {
		if (!placeholder) {
			return tag.name.toLowerCase();
		}
	}, [placeholder, tag?.name]);

	return (
		<>
			{placeholder && (
				<Panel
					shaded
					bordered
					bodyFill
					header={<Placeholder.Paragraph rows={1} />}
					className={clsx(
						"tags-items-item basis-[calc(50%-0.5rem)] hover:text-inherit sm:basis-[calc(25%-1rem)]",
						"transition-all duration-500 hover:-translate-y-1"
					)}
				>
					<div className="my-1 flex">
						<Placeholder.Paragraph rows={1} rowHeight={8} className="w-6" />
						<Placeholder.Paragraph
							rows={1}
							rowHeight={8}
							className="ml-3 w-20"
						/>
					</div>
				</Panel>
			)}

			{!placeholder && (
				<Panel
					as={Link}
					to={`/tag/${tagLinkName}`}
					shaded
					bordered
					bodyFill
					header={tag.name}
					className={clsx(
						"tags-items-item basis-[calc(50%-0.5rem)] hover:text-inherit sm:basis-[calc(25%-1rem)]",
						"transition-all duration-500 hover:-translate-y-1"
					)}
				>
					<small>
						<strong>{tag.node_count}</strong> publications
					</small>
				</Panel>
			)}
		</>
	);
});

export default PageTagsItem;
