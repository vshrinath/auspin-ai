import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FlyoutMenuSimple> = {
  title: "Navbar/FlyoutMenuSimple",
  component: FlyoutMenuSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FlyoutMenuSimple>;

export const Default: Story = {
  render: () => <FlyoutMenuSimple />,
};
