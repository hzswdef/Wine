import { CKEditorBody } from "@interfaces/ckeditor";
import { Paragraphs } from "@interfaces/post/paragraphs";
import { Tags } from "@interfaces/post/tags";

export interface Post {
  type: string;
  id: string;
  status: boolean;
  title: string;
  created: string;
  changed: string;
  uid: Uid;
  summary: CKEditorBody;
  paragraphs: Paragraphs;
  tags: Tags;
}

export interface Uid {
  type: string;
  id: string;
}

export default Post;
