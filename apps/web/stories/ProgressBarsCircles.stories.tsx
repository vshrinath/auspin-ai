import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBarsCircles } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ProgressBarsCircles> = {
  title: "Navbar/ProgressBarsCircles",
  component: ProgressBarsCircles,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBarsCircles>;

export const Default: Story = {
  render: () => <ProgressBarsCircles />,
};
