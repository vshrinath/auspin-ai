import type { Meta, StoryObj } from "@storybook/react";
import { ModalTwoActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ModalTwoActions> = {
  title: "Navbar/ModalTwoActions",
  component: ModalTwoActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalTwoActions>;

export const Default: Story = {
  render: () => <ModalTwoActions />,
};
