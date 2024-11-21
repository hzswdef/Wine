import AnimationContentBlur from "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur";
import PostTeaser from "@components/organisms/PostTeaser/PostTeaser";
import { PageTagState } from "@components/pages/PageTag/PageTag";
import { useMemo } from "react";

interface TagPageContentProps {
	loading: PageTagState["loading"];
	posts: PageTagState["posts"];
}

const PageTagContent = ({ loading, posts }: TagPageContentProps) => {
	const Placeholder = useMemo(
		() => (
			<>
				{Array.from({ length: 16 }).map((_, index) => (
					<PostTeaser key={index} placeholder />
				))}
			</>
		),
		[]
	);

	return (
		<div className="page-tag-content">
			<AnimationContentBlur stateIn={loading}>
				<div className="page-tag-content">
					{loading && Placeholder}

					{!loading &&
						posts.length > 0 &&
						posts.map(post => <PostTeaser key={post.id} post={post} />)}
				</div>
			</AnimationContentBlur>
		</div>
	);
};

export default PageTagContent;
