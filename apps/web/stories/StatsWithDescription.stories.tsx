import type { Meta, StoryObj } from "@storybook/react";
import { StatsWithDescription } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof StatsWithDescription> = {
  title: "Feature/StatsWithDescription",
  component: StatsWithDescription,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatsWithDescription>;

export const Default: Story = {
  render: () => <StatsWithDescription />,
};
