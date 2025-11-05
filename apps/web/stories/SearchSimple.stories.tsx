import type { Meta, StoryObj } from "@storybook/react";
import { SearchSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SearchSimple> = {
  title: "Navbar/SearchSimple",
  component: SearchSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchSimple>;

export const Default: Story = {
  render: () => <SearchSimple />,
};
