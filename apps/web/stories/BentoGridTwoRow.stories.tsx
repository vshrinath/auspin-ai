import type { Meta, StoryObj } from "@storybook/react";
import { BentoGridTwoRow } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BentoGridTwoRow> = {
  title: "Feature/BentoGridTwoRow",
  component: BentoGridTwoRow,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BentoGridTwoRow>;

export const Default: Story = {
  render: () => <BentoGridTwoRow />,
};
