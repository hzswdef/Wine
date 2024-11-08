import PostContext, { PostContextInterface } from "@contexts/PostContext.ts";
import { useContext } from "react";

const usePostContext = (): PostContextInterface => {
  return useContext<PostContextInterface>(PostContext);
};

export default usePostContext;
