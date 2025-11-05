import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsWithKeyboardShortcut } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsWithKeyboardShortcut> = {
  title: "Navbar/InputGroupsWithKeyboardShortcut",
  component: InputGroupsWithKeyboardShortcut,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsWithKeyboardShortcut>;

export const Default: Story = {
  render: () => <InputGroupsWithKeyboardShortcut />,
};
