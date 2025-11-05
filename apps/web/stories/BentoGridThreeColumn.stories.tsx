import type { Meta, StoryObj } from "@storybook/react";
import { BentoGridThreeColumn } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BentoGridThreeColumn> = {
  title: "Feature/BentoGridThreeColumn",
  component: BentoGridThreeColumn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BentoGridThreeColumn>;

export const Default: Story = {
  render: () => <BentoGridThreeColumn />,
};
