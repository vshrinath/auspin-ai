import type { Meta, StoryObj } from "@storybook/react";
import { StackedListsWithLinks } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof StackedListsWithLinks> = {
  title: "Navbar/StackedListsWithLinks",
  component: StackedListsWithLinks,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StackedListsWithLinks>;

export const Default: Story = {
  render: () => <StackedListsWithLinks />,
};
