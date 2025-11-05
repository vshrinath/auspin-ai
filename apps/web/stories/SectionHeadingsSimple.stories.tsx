import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsSimple> = {
  title: "Navbar/SectionHeadingsSimple",
  component: SectionHeadingsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsSimple>;

export const Default: Story = {
  render: () => <SectionHeadingsSimple />,
};
