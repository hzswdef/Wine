import PostContext, {
	Anchor,
	PostContextInterface
} from "@contexts/PostContext";
import { PropsWithChildren, useState } from "react";

const PostContextProvider = ({ children }: PropsWithChildren) => {
	const [anchors, setAnchors] = useState<PostContextInterface["anchors"]>({});

	const pushAnchor = (anchor: Anchor) => {
		setAnchors(prevState => ({
			...prevState,
			[anchor.id]: anchor
		}));
	};

	const context: PostContextInterface = {
		anchors: anchors,
		pushAnchor: pushAnchor
	};

	return (
		<PostContext.Provider value={context}>{children}</PostContext.Provider>
	);
};

export default PostContextProvider;
