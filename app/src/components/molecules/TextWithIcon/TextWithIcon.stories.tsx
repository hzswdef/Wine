import IconTextProps from "@components/molecules/TextWithIcon/TextWithIcon";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import ShareRoundIcon from "@rsuite/icons/ShareRound";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/Text with Icon",
  component: IconTextProps,
  argTypes: {
    icon: {
      control: "select",
      options: ["calendar", "share", "add"],
      mapping: {
        calendar: CalenderDateIcon,
        share: ShareRoundIcon,
        add: AddOutlineIcon
      }
    }
  }
} as Meta<typeof IconTextProps>;

type Story = StoryObj<typeof IconTextProps>;

export const Example: Story = {
  args: {
    text: "Text",
    icon: CalenderDateIcon
  }
};
