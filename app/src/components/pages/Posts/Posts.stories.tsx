import Posts from "@components/pages/Posts/Posts";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Posts",
	component: Posts,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof Posts>;

type Story = StoryObj<typeof Posts>;

export const Example: Story = {};
