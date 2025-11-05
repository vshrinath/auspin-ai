import type { Meta, StoryObj } from "@storybook/react";
import { ActionPanelsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ActionPanelsSimple> = {
  title: "Navbar/ActionPanelsSimple",
  component: ActionPanelsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActionPanelsSimple>;

export const Default: Story = {
  render: () => <ActionPanelsSimple />,
};
