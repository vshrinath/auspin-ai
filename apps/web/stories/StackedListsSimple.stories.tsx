import type { Meta, StoryObj } from "@storybook/react";
import { StackedListsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof StackedListsSimple> = {
  title: "Navbar/StackedListsSimple",
  component: StackedListsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StackedListsSimple>;

export const Default: Story = {
  render: () => <StackedListsSimple />,
};
