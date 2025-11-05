import type { Meta, StoryObj } from "@storybook/react";
import { StackedListsFullWidth } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof StackedListsFullWidth> = {
  title: "Navbar/StackedListsFullWidth",
  component: StackedListsFullWidth,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StackedListsFullWidth>;

export const Default: Story = {
  render: () => <StackedListsFullWidth />,
};
