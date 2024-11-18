import CKEditorTagBlockquote from "@components/atoms/CKEditorTags/CKEditorTagBlockquote/CKEditorTagBlockquote";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/CKEditorTags/CKEditorTagBlockquote",
	component: CKEditorTagBlockquote
} as Meta<typeof CKEditorTagBlockquote>;

type Story = StoryObj<typeof CKEditorTagBlockquote>;

export const Example: Story = {
	args: {
		children: "Blockquote"
	}
};

export const JSXExample: Story = {
	args: {
		children: (
			<>
				<strong>Lorem Ipsum</strong> is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book.
			</>
		)
	}
};
