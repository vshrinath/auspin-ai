import type { Meta, StoryObj } from "@storybook/react";
import { StackedListsWithLinksAndActionMenu } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof StackedListsWithLinksAndActionMenu> = {
  title: "Navbar/StackedListsWithLinksAndActionMenu",
  component: StackedListsWithLinksAndActionMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StackedListsWithLinksAndActionMenu>;

export const Default: Story = {
  render: () => <StackedListsWithLinksAndActionMenu />,
};
