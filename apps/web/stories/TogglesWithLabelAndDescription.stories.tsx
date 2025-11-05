import type { Meta, StoryObj } from "@storybook/react";
import { TogglesWithLabelAndDescription } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TogglesWithLabelAndDescription> = {
  title: "Navbar/TogglesWithLabelAndDescription",
  component: TogglesWithLabelAndDescription,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TogglesWithLabelAndDescription>;

export const Default: Story = {
  render: () => <TogglesWithLabelAndDescription />,
};
