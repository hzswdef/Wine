import { Tags as ITags } from "@interfaces/post/tags";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

interface TagsProps {
  tags: ITags;
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="post-tags my-4">
      {tags &&
        tags.map(tag => (
          <Link
            to={`/tag/${tag.name.toLowerCase()}`}
            key={tag.id}
            className={clsx(
              "post-tags-item mr-2 inline w-fit rounded-md bg-blue-600 px-2.5 py-1 hover:text-inherit",
              "text-sm font-bold",
              "transition-colors duration-200 hover:bg-blue-500",
            )}
          >
            {tag.name}
          </Link>
        ))}
    </div>
  );
};

export default Tags;
