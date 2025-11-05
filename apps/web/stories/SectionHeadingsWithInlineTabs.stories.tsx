import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithInlineTabs } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithInlineTabs> = {
  title: "Navbar/SectionHeadingsWithInlineTabs",
  component: SectionHeadingsWithInlineTabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithInlineTabs>;

export const Default: Story = {
  render: () => <SectionHeadingsWithInlineTabs />,
};
