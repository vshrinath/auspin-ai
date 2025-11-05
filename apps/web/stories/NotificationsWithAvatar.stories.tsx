import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsWithAvatar } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NotificationsWithAvatar> = {
  title: "Navbar/NotificationsWithAvatar",
  component: NotificationsWithAvatar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationsWithAvatar>;

export const Default: Story = {
  render: () => <NotificationsWithAvatar />,
};
