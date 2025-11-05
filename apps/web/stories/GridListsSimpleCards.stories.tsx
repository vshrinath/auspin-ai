import type { Meta, StoryObj } from "@storybook/react";
import { GridListsSimpleCards } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof GridListsSimpleCards> = {
  title: "Navbar/GridListsSimpleCards",
  component: GridListsSimpleCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GridListsSimpleCards>;

export const Default: Story = {
  render: () => <GridListsSimpleCards />,
};
