import type { Meta, StoryObj } from "@storybook/react";
import { BentoGridTwoRowWithThreeColumn } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BentoGridTwoRowWithThreeColumn> = {
  title: "Feature/BentoGridTwoRowWithThreeColumn",
  component: BentoGridTwoRowWithThreeColumn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BentoGridTwoRowWithThreeColumn>;

export const Default: Story = {
  render: () => <BentoGridTwoRowWithThreeColumn />,
};
