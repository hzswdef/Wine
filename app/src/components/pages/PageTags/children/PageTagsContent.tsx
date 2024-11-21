import AnimationContentBlur from "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur";
import PageTagsItem from "@components/pages/PageTags/children/PageTagsItem";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import { useMemo } from "react";

interface PageTagsContentProps {
	tags: TagsTaxonomy | undefined;
}

const PageTagsContent = ({ tags }: PageTagsContentProps) => {
	const Placeholder = useMemo(
		() => (
			<>
				{Array.from({ length: 16 }).map((_, index) => (
					<PageTagsItem key={index} placeholder />
				))}
			</>
		),
		[]
	);

	return (
		<div className="page-tags-content">
			<AnimationContentBlur stateIn={!tags}>
				<div className="tags-items flex flex-wrap gap-4">
					{tags && tags.map(tag => <PageTagsItem key={tag.id} tag={tag} />)}

					{!tags && Placeholder}
				</div>
			</AnimationContentBlur>
		</div>
	);
};

export default PageTagsContent;
