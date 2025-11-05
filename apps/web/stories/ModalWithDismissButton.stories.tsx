import type { Meta, StoryObj } from "@storybook/react";
import { ModalWithDismissButton } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ModalWithDismissButton> = {
  title: "Navbar/ModalWithDismissButton",
  component: ModalWithDismissButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalWithDismissButton>;

export const Default: Story = {
  render: () => <ModalWithDismissButton />,
};
