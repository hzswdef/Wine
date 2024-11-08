import { CKEditorBody } from "@interfaces/ckeditor";
import { Paragraphs } from "@interfaces/post/paragraphs";

export interface Post {
  type: string;
  id: string;
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  status: boolean;
  title: string;
  created: string;
  changed: string;
  uid: Uid;
  summary: CKEditorBody;
  paragraphs: Paragraphs;
}

export interface Uid {
  type: string;
  id: string;
}

export default Post;
