import Pagination from "@components/molecules/Pagination/Pagination";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Molecules/Pagination",
  component: Pagination,
  args: {
    total: 100,
    activePage: 1
  }
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Example: Story = {
  args: {
    total: 100,
    activePage: 1,
    onPageChange: () => {}
  },
  render: args => {
    const [activePage, setActivePage] = useState<number>(1);

    const onPageChange = (page: number) => {
      setActivePage(page);
    };

    return (
      <Pagination
        total={args.total}
        activePage={activePage}
        onPageChange={onPageChange}
      />
    );
  }
};
