import type { Meta, StoryObj } from "@storybook/react";
import { GridListsImagesWithDetails } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof GridListsImagesWithDetails> = {
  title: "Navbar/GridListsImagesWithDetails",
  component: GridListsImagesWithDetails,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GridListsImagesWithDetails>;

export const Default: Story = {
  render: () => <GridListsImagesWithDetails />,
};
