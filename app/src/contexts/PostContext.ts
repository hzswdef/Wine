import { createContext, MutableRefObject } from "react";

export interface Anchor {
  id: string;
  title: string;
  ref: MutableRefObject<HTMLDivElement>;
  onClick: () => void;
}

export interface PostContextInterface {
  anchors: {
    [key: Anchor["id"]]: Anchor;
  }
  pushAnchor: (anchor: Anchor) => void;
}

const PostContext = createContext<PostContextInterface>({
  anchors: {},
  pushAnchor: () => {},
});

export default PostContext;
