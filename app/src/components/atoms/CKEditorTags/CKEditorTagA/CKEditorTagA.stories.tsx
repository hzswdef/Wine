import CKEditorTagA from "@components/atoms/CKEditorTags/CKEditorTagA/CKEditorTagA";
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
	title: "Atoms/CKEditorTags/CKEditorTagA",
	component: CKEditorTagA,
	decorators: [BasicRouter]
} as Meta<typeof CKEditorTagA>;

type Story = StoryObj<typeof CKEditorTagA>;

export const Example: Story = {
	args: {
		href: "#",
		children: "Link"
	}
};
