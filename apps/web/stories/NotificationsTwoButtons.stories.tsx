import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsTwoButtons } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NotificationsTwoButtons> = {
  title: "Navbar/NotificationsTwoButtons",
  component: NotificationsTwoButtons,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationsTwoButtons>;

export const Default: Story = {
  render: () => <NotificationsTwoButtons />,
};
