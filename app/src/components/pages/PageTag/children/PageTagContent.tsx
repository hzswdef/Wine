import PostTeaser from "@components/organisms/PostTeaser/PostTeaser";
import Post from "@interfaces/post/post";

interface TagPageContentProps {
	posts: Post[];
}

const PageTagContent = ({ posts }: TagPageContentProps) => (
	<div className="page-tag-content">
		{posts.length > 0 &&
			posts.map(post => <PostTeaser key={post.id} post={post} />)}
	</div>
);

export default PageTagContent;
