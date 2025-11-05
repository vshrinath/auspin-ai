import type { Meta, StoryObj } from "@storybook/react";
import { StatsSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof StatsSimple> = {
  title: "Feature/StatsSimple",
  component: StatsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatsSimple>;

export const Default: Story = {
  render: () => <StatsSimple />,
};
