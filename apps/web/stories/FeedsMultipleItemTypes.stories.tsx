import type { Meta, StoryObj } from "@storybook/react";
import { FeedsMultipleItemTypes } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FeedsMultipleItemTypes> = {
  title: "Navbar/FeedsMultipleItemTypes",
  component: FeedsMultipleItemTypes,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeedsMultipleItemTypes>;

export const Default: Story = {
  render: () => <FeedsMultipleItemTypes />,
};
