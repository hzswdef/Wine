import Share from "@components/molecules/Share/Share";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/Share",
  component: Share,
} as Meta<typeof Share>;

type Story = StoryObj<typeof Share>;

export const Example: Story = {
  args: {
    shareTitle: "Storybook!",
  }
};
