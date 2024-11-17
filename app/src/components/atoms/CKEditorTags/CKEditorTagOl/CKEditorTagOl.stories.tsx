import CKEditorTagOl from "@components/atoms/CKEditorTags/CKEditorTagOl/CKEditorTagOl";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/CKEditorTags/CKEditorTagOl",
  component: CKEditorTagOl
} as Meta<typeof CKEditorTagOl>;

type Story = StoryObj<typeof CKEditorTagOl>;

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
