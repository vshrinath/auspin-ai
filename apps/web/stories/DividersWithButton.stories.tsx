import type { Meta, StoryObj } from "@storybook/react";
import { DividersWithButton } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof DividersWithButton> = {
  title: "Navbar/DividersWithButton",
  component: DividersWithButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DividersWithButton>;

export const Default: Story = {
  render: () => <DividersWithButton />,
};
