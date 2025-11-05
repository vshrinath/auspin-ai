import type { Meta, StoryObj } from "@storybook/react";
import { AlertsWithLink } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof AlertsWithLink> = {
  title: "Navbar/AlertsWithLink",
  component: AlertsWithLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AlertsWithLink>;

export const Default: Story = {
  render: () => <AlertsWithLink />,
};
