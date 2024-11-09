import { CKEditorBody } from "@interfaces/ckeditor";

interface Paragraph {
  type:
    | "Paragraph - Section"
    | "Paragraph - Text"
    | "Paragraph - Code"
    | "Paragraph - Links";
  id: string;
  drupal_internal__id: number;
  parent_id: number;
  status: boolean;
  created: string;
}

interface ParagraphWithAnchorTitle extends Paragraph {
  anchor_title?: string;
}

export type ParagraphsUnion =
  | SectionParagraph
  | TextParagraph
  | CodeParagraph
  | LinksParagraph;

export type Paragraphs = Array<ParagraphsUnion>;

export interface SectionParagraph extends ParagraphWithAnchorTitle {
  type: "Paragraph - Section";
  paragraphs: Paragraphs;
}

export interface TextParagraph extends ParagraphWithAnchorTitle {
  type: "Paragraph - Text";
  body: CKEditorBody;
}

export interface CodeParagraph extends ParagraphWithAnchorTitle {
  type: "Paragraph - Code";
  title: string;
  language: string;
  body: string;
}

interface LinksParagraphLinks {
  uri: string;
  title: string;
}

export interface LinksParagraph extends Paragraph {
  type: "Paragraph - Links";
  field_links: LinksParagraphLinks[];
}
