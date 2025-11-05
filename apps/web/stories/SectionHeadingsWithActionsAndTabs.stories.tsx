import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithActionsAndTabs } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithActionsAndTabs> = {
  title: "Navbar/SectionHeadingsWithActionsAndTabs",
  component: SectionHeadingsWithActionsAndTabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithActionsAndTabs>;

export const Default: Story = {
  render: () => <SectionHeadingsWithActionsAndTabs />,
};
