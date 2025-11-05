import type { Meta, StoryObj } from "@storybook/react";
import { FeedsWithComments } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FeedsWithComments> = {
  title: "Navbar/FeedsWithComments",
  component: FeedsWithComments,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeedsWithComments>;

export const Default: Story = {
  render: () => <FeedsWithComments />,
};
