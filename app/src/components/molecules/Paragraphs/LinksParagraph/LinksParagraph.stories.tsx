import LinksParagraph from "@components/molecules/Paragraphs/LinksParagraph/LinksParagraph";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/Paragraphs/LinksParagraph",
	component: LinksParagraph
} as Meta<typeof LinksParagraph>;

type Story = StoryObj<typeof LinksParagraph>;

export const Example: Story = {
	args: {
		paragraph: {
			type: "Paragraph - Links",
			id: "70a8ca24-5160-494e-8bd3-4895be119019",
			drupal_internal__id: 21,
			status: true,
			created: "2024-11-08T12:44:33+00:00",
			parent_id: 2,
			field_links: [
				{
					uri: "https://github.com/hzswdef",
					title: "Source Code"
				}
			]
		}
	}
};
