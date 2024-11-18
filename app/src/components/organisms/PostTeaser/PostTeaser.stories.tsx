import PostTeaser from "@components/organisms/PostTeaser/PostTeaser";
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
	title: "Organisms/PostTeaser",
	component: PostTeaser,
	argTypes: {
		limitTags: {
			control: "select",
			options: [true, false, 1, 2, 3, 4, 5]
		}
	},
	decorators: [BasicRouter]
} as Meta<typeof PostTeaser>;

type Story = StoryObj<typeof PostTeaser>;

export const Example: Story = {
	args: {
		post: {
			type: "Node - Post",
			id: "cf29454e-ad53-4307-a1e8-41eb99058e6c",
			status: true,
			title: "React Context API Explained with Examples",
			created: "2024-11-09T15:27:37+00:00",
			changed: "2024-11-09T15:27:39+00:00",
			summary: {
				value:
					"<p>Managing state has always been a critical aspect of making web applications with React. The most basic way to do this is prop drilling. In prop drilling, you pass props around from the parent component to other components that need it, no matter how deeply nested they are.</p>",
				format: "full_html",
				processed:
					"<p>Managing state has always been a critical aspect of making web applications with React. The most basic way to do this is prop drilling. In prop drilling, you pass props around from the parent component to other components that need it, no matter how deeply nested they are.</p>"
			},
			uid: {
				type: "User",
				id: "d8fe8b3f-fc12-4a59-b0a3-a650bff6ed44"
			},
			paragraphs: [],
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
			]
		},
		limitTags: true
	}
};
