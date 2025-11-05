import type { Meta, StoryObj } from "@storybook/react";
import { AlertsWithDescription } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof AlertsWithDescription> = {
  title: "Navbar/AlertsWithDescription",
  component: AlertsWithDescription,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AlertsWithDescription>;

export const Default: Story = {
  render: () => <AlertsWithDescription />,
};
