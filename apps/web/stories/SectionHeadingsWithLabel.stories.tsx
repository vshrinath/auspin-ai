import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithLabel } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithLabel> = {
  title: "Navbar/SectionHeadingsWithLabel",
  component: SectionHeadingsWithLabel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithLabel>;

export const Default: Story = {
  render: () => <SectionHeadingsWithLabel />,
};
