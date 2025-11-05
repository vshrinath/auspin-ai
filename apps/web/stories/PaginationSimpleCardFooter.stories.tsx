import type { Meta, StoryObj } from "@storybook/react";
import { PaginationSimpleCardFooter } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PaginationSimpleCardFooter> = {
  title: "Navbar/PaginationSimpleCardFooter",
  component: PaginationSimpleCardFooter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PaginationSimpleCardFooter>;

export const Default: Story = {
  render: () => <PaginationSimpleCardFooter />,
};
