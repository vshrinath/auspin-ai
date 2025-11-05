import type { Meta, StoryObj } from "@storybook/react";
import { TogglesWithIcon } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TogglesWithIcon> = {
  title: "Navbar/TogglesWithIcon",
  component: TogglesWithIcon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TogglesWithIcon>;

export const Default: Story = {
  render: () => <TogglesWithIcon />,
};
