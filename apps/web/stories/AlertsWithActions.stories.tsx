import type { Meta, StoryObj } from "@storybook/react";
import { AlertsWithActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof AlertsWithActions> = {
  title: "Navbar/AlertsWithActions",
  component: AlertsWithActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AlertsWithActions>;

export const Default: Story = {
  render: () => <AlertsWithActions />,
};
