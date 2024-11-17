import { Tags as ITags } from "@interfaces/post/tags";
import { clsx } from "clsx";
import { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface TagsProps {
  tags: ITags;
  appearance: "primary" | "secondary";
  className?: string;
  limitTags?: boolean | number;
}

const Tags = memo(({ tags, appearance, ...props }: TagsProps) => {
  const [items, setItems] = useState<ITags>(tags);

  const className = useMemo(
    () =>
      clsx(
        "post-tags flex gap-2 flex-wrap",
        props.className && props.className
      ),
    [props.className]
  );

  useEffect(() => {
    let limitTags: number = 0;

    if (props.limitTags) {
      if (typeof props.limitTags === "boolean") {
        limitTags = 5;
      } else {
        limitTags = props.limitTags;
      }
    }

    if (limitTags > 0) {
      setItems(tags.slice(0, limitTags));
    }
  }, [tags, props.limitTags]);

  return (
    <div className={className}>
      {items &&
        items.map(tag => (
          <Link
            to={`/tag/${tag.name.toLowerCase()}`}
            key={tag.id}
            className={clsx(
              "post-tags-item inline w-fit text-nowrap transition-colors duration-200",
              appearance === "primary" && [
                "rounded-md bg-blue-600 px-2.5 py-1 hover:text-inherit",
                "text-sm font-bold hover:bg-blue-500"
              ],
              appearance === "secondary" && [
                "rounded-full bg-blue-600 bg-opacity-25 px-2 py-0.5 text-sm text-blue-400",
                "hover:bg-blue-600 hover:bg-opacity-80 hover:text-blue-100"
              ]
            )}
          >
            {tag.name}
          </Link>
        ))}
    </div>
  );
});

export default Tags;
