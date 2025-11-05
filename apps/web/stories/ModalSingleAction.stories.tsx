import type { Meta, StoryObj } from "@storybook/react";
import { ModalSingleAction } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ModalSingleAction> = {
  title: "Navbar/ModalSingleAction",
  component: ModalSingleAction,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalSingleAction>;

export const Default: Story = {
  render: () => <ModalSingleAction />,
};
