import PageNotFound from "@components/pages/PageNotFound/PageNotFound";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/NotFound",
	component: PageNotFound,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof PageNotFound>;

type Story = StoryObj<typeof PageNotFound>;

export const Example: Story = {};
