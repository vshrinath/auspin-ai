import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBarsLine } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ProgressBarsLine> = {
  title: "Navbar/ProgressBarsLine",
  component: ProgressBarsLine,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBarsLine>;

export const Default: Story = {
  render: () => <ProgressBarsLine />,
};
