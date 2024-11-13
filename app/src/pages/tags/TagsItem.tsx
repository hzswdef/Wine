import { Taxonomy } from "@interfaces/taxonomy";
import { clsx } from "clsx";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Panel } from "rsuite";

interface TagsItemProps {
  tag: Taxonomy;
}

const TagsItem = memo(({ tag }: TagsItemProps) => {
  const tagLinkName = useMemo(() => {
    return tag.name.toLowerCase();
  }, [tag.name]);

  return (
    <Panel
      as={Link}
      to={`/tag/${tagLinkName}`}
      shaded
      bordered
      bodyFill
      key={tag.id}
      header={tag.name}
      className={clsx(
        "tags-items-item basis-[calc(50%-0.5rem)] hover:text-inherit sm:basis-[calc(25%-1rem)]",
        "transition-all duration-500 hover:-translate-y-1",
      )}
    >
      <small>
        <strong>{tag.node_count}</strong> publications
      </small>
    </Panel>
  );
});

export default TagsItem;
