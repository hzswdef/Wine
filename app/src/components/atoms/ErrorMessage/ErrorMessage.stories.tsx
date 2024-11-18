import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/ErrorMessage",
	component: ErrorMessage
} as Meta<typeof ErrorMessage>;

type Story = StoryObj<typeof ErrorMessage>;

export const Example: Story = {
	args: {
		children: "This is an error message."
	}
};
