interface Taxonomy {
  type: "Taxonomy Term - Tags";
  id: string;
  name: string;
  description: string;
}

export type TagsTaxonomy = Array<Taxonomy>;
