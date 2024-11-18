import "@components/pages/Tags/Tags.scss";

import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import PageBase from "@components/pages/PageBase/PageBase";
import TagsPageItem from "@components/pages/Tags/children/TagsPageItem";
import useTitle from "@hooks/useTitle";
import TaxonomyClient from "@http/clients/taxonomyClient";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import { useEffect, useState } from "react";

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
		<PageBase page="tags" title="Tags">
			{error && <ErrorMessage>{error}</ErrorMessage>}

			{tags && (
				<div className="tags-items flex flex-wrap gap-4">
					{tags.map(tag => (
						<TagsPageItem key={tag.id} tag={tag} />
					))}
				</div>
			)}
		</PageBase>
	);
};

export default Tags;
