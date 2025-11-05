import type { Meta, StoryObj } from "@storybook/react";
import { GridListsContactCards } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof GridListsContactCards> = {
  title: "Navbar/GridListsContactCards",
  component: GridListsContactCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GridListsContactCards>;

export const Default: Story = {
  render: () => <GridListsContactCards />,
};
