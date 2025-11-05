import type { Meta, StoryObj } from "@storybook/react";
import { StackedListsWithBadgesButtonsAndActionMenu } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof StackedListsWithBadgesButtonsAndActionMenu> = {
  title: "Navbar/StackedListsWithBadgesButtonsAndActionMenu",
  component: StackedListsWithBadgesButtonsAndActionMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StackedListsWithBadgesButtonsAndActionMenu>;

export const Default: Story = {
  render: () => <StackedListsWithBadgesButtonsAndActionMenu />,
};
