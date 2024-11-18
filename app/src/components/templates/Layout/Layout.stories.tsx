import Layout from "@components/templates/Layout/Layout";
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
	title: "Templates/Layout",
	component: Layout,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [BasicRouter]
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Example: Story = {};
