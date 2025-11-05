import type { Meta, StoryObj } from "@storybook/react";
import { CardHeadingsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CardHeadingsSimple> = {
  title: "Navbar/CardHeadingsSimple",
  component: CardHeadingsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardHeadingsSimple>;

export const Default: Story = {
  render: () => <CardHeadingsSimple />,
};
