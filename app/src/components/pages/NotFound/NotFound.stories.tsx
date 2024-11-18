import NotFound from "@components/pages/NotFound/NotFound";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/NotFound",
	component: NotFound,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof NotFound>;

type Story = StoryObj<typeof NotFound>;

export const Example: Story = {};
