import CKEditorTagUl from "@components/atoms/CKEditorTags/CKEditorTagUl/CKEditorTagUl";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/CKEditorTags/CKEditorTagUl",
	component: CKEditorTagUl
} as Meta<typeof CKEditorTagUl>;

type Story = StoryObj<typeof CKEditorTagUl>;

export const Example: Story = {
	args: {
		children: (
			<>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</>
		)
	}
};
