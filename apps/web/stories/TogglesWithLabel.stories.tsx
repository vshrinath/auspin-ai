import type { Meta, StoryObj } from "@storybook/react";
import { TogglesWithLabel } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TogglesWithLabel> = {
  title: "Navbar/TogglesWithLabel",
  component: TogglesWithLabel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TogglesWithLabel>;

export const Default: Story = {
  render: () => <TogglesWithLabel />,
};
