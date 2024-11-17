import "@pages/tags/Tags.scss";

import useTitle from "@hooks/useTitle";
import TaxonomyClient from "@http/clients/taxonomyClient";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import Page from "@pages/Page";
import TagsItem from "@pages/tags/TagsItem";
import { useEffect, useState } from "react";
import { Message } from "rsuite";

const Tags = () => {
	const updateTitle = useTitle();

	const [tags, setTags] = useState<TagsTaxonomy | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		updateTitle("Tags");
	}, [updateTitle]);

	useEffect(() => {
		TaxonomyClient.getTags()
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
						<TagsItem key={tag.id} tag={tag} />
					))}
				</div>
			)}
		</Page>
	);
};

export default Tags;
