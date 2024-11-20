import AnimationContentBlur from "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur";
import PostTeaser from "@components/organisms/PostTeaser/PostTeaser";
import { PageState } from "@components/pages/PagePosts/PagePosts";
import { memo, useMemo } from "react";

interface PostsContentProps {
	didInitialFetch: boolean;
	pageStateLoading: PageState["loading"];
	posts: PageState["posts"];
}

const PagePostsContent = memo(
	({ didInitialFetch, pageStateLoading, posts }: PostsContentProps) => {
		const Placeholder = useMemo(
			() => (
				<>
					{Array.from({ length: 10 }).map((_, index) => (
						<PostTeaser key={index} placeholder />
					))}
				</>
			),
			[]
		);

		return (
			<AnimationContentBlur
				stateIn={pageStateLoading}
				wrapperClassName="posts-items"
			>
				{didInitialFetch &&
					posts.map(post => <PostTeaser key={post.id} limitTags post={post} />)}

				{!didInitialFetch && Placeholder}
			</AnimationContentBlur>
		);
	}
);

export default PagePostsContent;
