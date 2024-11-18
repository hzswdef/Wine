import RegionContent from "@components/organisms/Regions/RegionContent/RegionContent";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Organisms/Regions/RegionContent",
	component: RegionContent,
	parameters: {
		layout: "fullscreen"
	}
} as Meta<typeof RegionContent>;

type Story = StoryObj<typeof RegionContent>;

export const Example: Story = {};
