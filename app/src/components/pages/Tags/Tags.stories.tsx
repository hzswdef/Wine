import Tags from "@components/pages/Tags/Tags";
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
	title: "Pages/Tags",
	component: Tags,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [AppRouter]
} as Meta<typeof Tags>;

type Story = StoryObj<typeof Tags>;

export const Example: Story = {};
