import type { Meta, StoryObj } from "@storybook/react";
import { GridListsActionsWithSharedBorders } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof GridListsActionsWithSharedBorders> = {
  title: "Navbar/GridListsActionsWithSharedBorders",
  component: GridListsActionsWithSharedBorders,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GridListsActionsWithSharedBorders>;

export const Default: Story = {
  render: () => <GridListsActionsWithSharedBorders />,
};
