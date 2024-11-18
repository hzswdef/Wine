import RegionSidebar from "@components/organisms/Regions/RegionSidebar/RegionSidebar";
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
	title: "Organisms/Regions/RegionSidebar",
	component: RegionSidebar,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [BasicRouter]
} as Meta<typeof RegionSidebar>;

type Story = StoryObj<typeof RegionSidebar>;

export const Example: Story = {
	decorators: [
		Story => (
			<div className="wrapper flex h-screen">
				<Story />

				<div className="content"></div>
			</div>
		)
	]
};
