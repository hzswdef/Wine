import PagePosts from "@components/pages/PagePosts/PagePosts";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Posts",
	component: PagePosts,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof PagePosts>;

type Story = StoryObj<typeof PagePosts>;

export const Example: Story = {};
