import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupNotificationSelection } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof RadioGroupNotificationSelection> = {
  title: "Navbar/RadioGroupNotificationSelection",
  component: RadioGroupNotificationSelection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroupNotificationSelection>;

export const Default: Story = {
  render: () => <RadioGroupNotificationSelection />,
};
