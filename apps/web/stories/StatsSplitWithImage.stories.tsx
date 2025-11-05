import type { Meta, StoryObj } from "@storybook/react";
import { StatsSplitWithImage } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof StatsSplitWithImage> = {
  title: "Feature/StatsSplitWithImage",
  component: StatsSplitWithImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatsSplitWithImage>;

export const Default: Story = {
  render: () => <StatsSplitWithImage />,
};
