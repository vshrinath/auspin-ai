import type { Meta, StoryObj } from "@storybook/react";
import { StatsTimeline } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof StatsTimeline> = {
  title: "Feature/StatsTimeline",
  component: StatsTimeline,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatsTimeline>;

export const Default: Story = {
  render: () => <StatsTimeline />,
};
