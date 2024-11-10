interface Taxonomy {
  type: "Taxonomy Term - Tags";
  id: string;
  name: string;
  description: string;
  node_count: number;
}

export type TagsTaxonomy = Array<Taxonomy>;
