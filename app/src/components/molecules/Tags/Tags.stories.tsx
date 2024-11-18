import Tags from "@components/molecules/Tags/Tags";
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
	title: "Molecules/Tags",
	component: Tags,
	argTypes: {
		limitTags: {
			control: "select",
			options: [true, false, 1, 2, 3, 4, 5]
		}
	},
	decorators: [BasicRouter]
} as Meta<typeof Tags>;

type Story = StoryObj<typeof Tags>;

export const Example: Story = {
	args: {
		tags: [
			{
				type: "Taxonomy Term - Tags",
				id: "2e22333d-1678-4fe7-9095-dedae2a2af61",
				name: "Frontend"
			},
			{
				type: "Taxonomy Term - Tags",
				id: "69fb31bb-5482-4788-8c0b-7be0fca455b2",
				name: "Backend"
			},
			{
				type: "Taxonomy Term - Tags",
				id: "6ea698d6-98ba-4400-83ba-09ceb4cab7ee",
				name: "Drupal"
			},
			{
				type: "Taxonomy Term - Tags",
				id: "8b087a35-a4ff-48e2-898a-5756fe857d91",
				name: "React"
			},
			{
				type: "Taxonomy Term - Tags",
				id: "5a960ecf-841e-4112-9a2f-77617c98f121",
				name: "React State Management"
			}
		],
		appearance: "primary"
	}
};
