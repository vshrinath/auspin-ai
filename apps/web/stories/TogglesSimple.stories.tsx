import type { Meta, StoryObj } from "@storybook/react";
import { TogglesSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TogglesSimple> = {
  title: "Navbar/TogglesSimple",
  component: TogglesSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TogglesSimple>;

export const Default: Story = {
  render: () => <TogglesSimple />,
};
