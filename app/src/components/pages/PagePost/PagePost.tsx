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

const PagePost = () => {
	const { id } = useParams();

	const [post, setPost] = useState<IPost | null>(null);
	const [error, setError] = useState<string | null>(null);

	const updateTitle = useTitle();

	useEffect(() => {
		PostsClient.getPost(id ?? "")
			.then(response => {
				setPost(response.data.data);
			})
			.catch(() => {
				setError("Something went wrong. Please try again later.");
			});
	}, [id]);

	useEffect(() => {
		if (post) {
			updateTitle(post.title);
		}
	}, [post, updateTitle]);

	if (!post) {
		if (!error) {
			return <>Loading</>;
		} else {
			return <ErrorMessage>{error}</ErrorMessage>;
		}
	}

	return (
		<PageBase page="post" className="post relative" title={post.title}>
			<PagePostAnchors />
			<PagePostHeader summary={post.summary.processed} created={post.created} />
			<PagePostParagraphs paragraphs={post.paragraphs} />
			<PagePostFooter title={post.title} tags={post.tags} />
		</PageBase>
	);
};

export default PagePost;
