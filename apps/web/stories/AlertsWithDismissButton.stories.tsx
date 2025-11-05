import type { Meta, StoryObj } from "@storybook/react";
import { AlertsWithDismissButton } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof AlertsWithDismissButton> = {
  title: "Navbar/AlertsWithDismissButton",
  component: AlertsWithDismissButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AlertsWithDismissButton>;

export const Default: Story = {
  render: () => <AlertsWithDismissButton />,
};
