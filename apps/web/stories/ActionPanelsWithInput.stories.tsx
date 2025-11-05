import type { Meta, StoryObj } from "@storybook/react";
import { ActionPanelsWithInput } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ActionPanelsWithInput> = {
  title: "Navbar/ActionPanelsWithInput",
  component: ActionPanelsWithInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActionPanelsWithInput>;

export const Default: Story = {
  render: () => <ActionPanelsWithInput />,
};
