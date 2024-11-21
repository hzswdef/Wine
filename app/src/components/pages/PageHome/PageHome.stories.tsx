import PageHome from "@components/pages/PageHome/PageHome";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Home",
	component: PageHome,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof PageHome>;

type Story = StoryObj<typeof PageHome>;

export const Example: Story = {};
