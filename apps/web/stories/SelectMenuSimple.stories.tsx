import type { Meta, StoryObj } from "@storybook/react";
import { SelectMenuSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SelectMenuSimple> = {
  title: "Navbar/SelectMenuSimple",
  component: SelectMenuSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectMenuSimple>;

export const Default: Story = {
  render: () => <SelectMenuSimple />,
};
