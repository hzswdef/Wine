import PostContext, {
	Anchor,
	PostContextInterface
} from "@contexts/PostContext/PostContext";
import { PropsWithChildren, useCallback, useState } from "react";

const PostContextProvider = ({ children }: PropsWithChildren) => {
	const [anchors, setAnchors] = useState<PostContextInterface["anchors"]>({});

	const pushAnchor = useCallback((anchor: Anchor) => {
		setAnchors(prevState => ({
			...prevState,
			[anchor.id]: anchor
		}));
	}, []);

	const context: PostContextInterface = {
		anchors: anchors,
		pushAnchor: pushAnchor
	};

	return (
		<PostContext.Provider value={context}>{children}</PostContext.Provider>
	);
};

export default PostContextProvider;
