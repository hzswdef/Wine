import "@pages/tags/Tags.scss";

import useTitle from "@hooks/useTitle";
import Taxonomy from "@http/clients/taxonomy";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import Page from "@pages/Page";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Message, Panel } from "rsuite";

const Tags = () => {
  const updateTitle = useTitle();

  const [tags, setTags] = useState<TagsTaxonomy | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    updateTitle("Tags");
  }, [updateTitle]);

  useEffect(() => {
    Taxonomy.getTags()
      .then(response => {
        setTags(response.data.data);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  }, []);

  return (
    <Page page="tags" title="Tags">
      {error && (
        <Message type="error" showIcon>
          {error}
        </Message>
      )}

      {tags && (
        <div className="tags-items flex flex-wrap gap-4">
          {tags.map(tag => (
            <Panel
              as={Link}
              to={`/tag/${tag.name.toLowerCase()}`}
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
          ))}
        </div>
      )}
    </Page>
  );
};

export default Tags;
