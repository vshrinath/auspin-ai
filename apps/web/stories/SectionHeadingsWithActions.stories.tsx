import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithActions> = {
  title: "Navbar/SectionHeadingsWithActions",
  component: SectionHeadingsWithActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithActions>;

export const Default: Story = {
  render: () => <SectionHeadingsWithActions />,
};
