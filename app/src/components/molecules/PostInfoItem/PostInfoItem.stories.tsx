import PostInfoItem from "@components/molecules/PostInfoItem/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/PostInfoItem",
	component: PostInfoItem,
	argTypes: {
		text: {
			control: "text"
		},
		popover: {
			control: "select",
			options: ["example"],
			mapping: {
				example: "Example"
			}
		},
		icon: {
			control: "select",
			options: ["Calendar"],
			mapping: {
				Calendar: CalenderDateIcon
			}
		}
	}
} as Meta<typeof PostInfoItem>;

type Story = StoryObj<typeof PostInfoItem>;

export const Example: Story = {
	args: {
		text: "Text",
		popover: "example",
		icon: CalenderDateIcon
	}
};
