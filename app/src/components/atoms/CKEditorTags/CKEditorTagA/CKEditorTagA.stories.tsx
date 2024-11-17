import CKEditorTagA from "@components/atoms/CKEditorTags/CKEditorTagA/CKEditorTagA";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/CKEditorTags/CKEditorTagA",
  component: CKEditorTagA
} as Meta<typeof CKEditorTagA>;

type Story = StoryObj<typeof CKEditorTagA>;

export const Example: Story = {
  args: {
    href: "#",
    children: "Link"
  }
};
