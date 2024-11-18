import Home from "@components/pages/Home/Home";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Home",
	component: Home,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof Home>;

type Story = StoryObj<typeof Home>;

export const Example: Story = {};
