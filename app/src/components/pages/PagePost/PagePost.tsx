import AnimationContentBlur from "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur";
import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import PageBase from "@components/pages/PageBase/PageBase";
import PagePostAnchors from "@components/pages/PagePost/children/PagePostAnchors";
import PagePostFooter from "@components/pages/PagePost/children/PagePostFooter";
import PagePostHeader from "@components/pages/PagePost/children/PagePostHeader";
import PagePostParagraphs from "@components/pages/PagePost/children/PagePostParagraphs";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import { Post as IPost } from "@interfaces/post/post";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Placeholder } from "rsuite";

const PagePost = () => {
	const { id } = useParams();

	const [post, setPost] = useState<IPost | undefined>();
	const [error, setError] = useState<string | null>(null);

	const updateTitle = useTitle();

	useEffect(() => {
		if (id) {
			PostsClient.getPost(id)
				.then(response => {
					setPost(response.data.data);
				})
				.catch(() => {
					setError("Something went wrong. Please try again later.");
				});
		} else {
			setError("Post ID missing.");
		}
	}, [id]);

	useEffect(() => {
		if (post) {
			updateTitle(post.title);
		}
	}, [post, updateTitle]);

	return (
		<PageBase
			page="post"
			className="post relative"
			title={
				<AnimationContentBlur stateIn={!post}>
					{post && <>{post.title}</>}

					{!post && (
						<Placeholder.Paragraph
							rows={1}
							rowHeight={48}
							className="mt-2 blur-sm"
						/>
					)}
				</AnimationContentBlur>
			}
		>
			{error && <ErrorMessage>{error}</ErrorMessage>}

			{!error && (
				<>
					<PagePostAnchors />

					<AnimationContentBlur stateIn={!post}>
						<PagePostHeader
							summary={post?.summary.processed}
							created={post?.created}
							placeholder={!post}
						/>
						<PagePostParagraphs
							paragraphs={post?.paragraphs}
							placeholder={!post}
						/>
					</AnimationContentBlur>

					{post && <PagePostFooter title={post.title} tags={post.tags} />}
				</>
			)}
		</PageBase>
	);
};

export default PagePost;
