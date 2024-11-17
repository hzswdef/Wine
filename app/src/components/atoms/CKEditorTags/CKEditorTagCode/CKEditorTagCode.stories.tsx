import CKEditorTagCode from "@components/atoms/CKEditorTags/CKEditorTagCode/CKEditorTagCode";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/CKEditorTags/CKEditorTagCode",
  component: CKEditorTagCode
} as Meta<typeof CKEditorTagCode>;

type Story = StoryObj<typeof CKEditorTagCode>;

export const Example: Story = {
  args: {
    children: "code"
  }
};
