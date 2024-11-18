import PostContext, {
	PostContextInterface
} from "@contexts/PostContext/PostContext";
import { useContext } from "react";

const usePostContext = (): PostContextInterface => {
	return useContext<PostContextInterface>(PostContext);
};

export default usePostContext;
