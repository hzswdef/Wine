import PageTags from "@components/pages/PageTags/PageTags";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Tags",
	component: PageTags,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof PageTags>;

type Story = StoryObj<typeof PageTags>;

export const Example: Story = {};
