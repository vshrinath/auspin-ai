import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeadingsWithDescription } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SectionHeadingsWithDescription> = {
  title: "Navbar/SectionHeadingsWithDescription",
  component: SectionHeadingsWithDescription,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SectionHeadingsWithDescription>;

export const Default: Story = {
  render: () => <SectionHeadingsWithDescription />,
};
