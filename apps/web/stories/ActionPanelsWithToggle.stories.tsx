import type { Meta, StoryObj } from "@storybook/react";
import { ActionPanelsWithToggle } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ActionPanelsWithToggle> = {
  title: "Navbar/ActionPanelsWithToggle",
  component: ActionPanelsWithToggle,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActionPanelsWithToggle>;

export const Default: Story = {
  render: () => <ActionPanelsWithToggle />,
};
