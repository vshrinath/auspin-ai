import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NotificationsSimple> = {
  title: "Navbar/NotificationsSimple",
  component: NotificationsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationsSimple>;

export const Default: Story = {
  render: () => <NotificationsSimple />,
};
