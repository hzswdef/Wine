import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import PageBase from "@components/pages/PageBase/PageBase";
import PostPageAnchors from "@components/pages/Post/children/PostPageAnchors";
import PostPageFooter from "@components/pages/Post/children/PostPageFooter";
import PostPageHeader from "@components/pages/Post/children/PostPageHeader";
import PostPageParagraphs from "@components/pages/Post/children/PostPageParagraphs";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import { Post as IPost } from "@interfaces/post/post";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
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
			<PostPageAnchors />
			<PostPageHeader summary={post.summary.processed} created={post.created} />
			<PostPageParagraphs paragraphs={post.paragraphs} />
			<PostPageFooter title={post.title} tags={post.tags} />
		</PageBase>
	);
};

export default Post;
