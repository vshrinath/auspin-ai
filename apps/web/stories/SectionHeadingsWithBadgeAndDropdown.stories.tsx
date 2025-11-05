import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithBadgeAndDropdown } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithBadgeAndDropdown> = {
  title: "Navbar/SectionHeadingsWithBadgeAndDropdown",
  component: SectionHeadingsWithBadgeAndDropdown,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithBadgeAndDropdown>;

export const Default: Story = {
  render: () => <SectionHeadingsWithBadgeAndDropdown />,
};
