import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsWithActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NotificationsWithActions> = {
  title: "Navbar/NotificationsWithActions",
  component: NotificationsWithActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationsWithActions>;

export const Default: Story = {
  render: () => <NotificationsWithActions />,
};
