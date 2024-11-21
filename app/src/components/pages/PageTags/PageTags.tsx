import "@components/pages/PageTags/PageTags.scss";

import PageBase from "@components/pages/PageBase/PageBase";
import PageTagsContent from "@components/pages/PageTags/children/PageTagsContent";
import PageTagsHeader from "@components/pages/PageTags/children/PageTagsHeader";
import useTitle from "@hooks/useTitle";
import TaxonomyClient from "@http/clients/taxonomyClient";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import { useEffect, useState } from "react";

const PageTags = () => {
	const updateTitle = useTitle();

	const [tags, setTags] = useState<TagsTaxonomy | undefined>();
	const [error, setError] = useState<string | undefined>();

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
			<PageTagsHeader error={error} />
			<PageTagsContent tags={tags} />
		</PageBase>
	);
};

export default PageTags;
