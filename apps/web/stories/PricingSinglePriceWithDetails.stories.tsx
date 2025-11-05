import type { Meta, StoryObj } from "@storybook/react";
import { PricingSinglePriceWithDetails } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingSinglePriceWithDetails> = {
  title: "Feature/PricingSinglePriceWithDetails",
  component: PricingSinglePriceWithDetails,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingSinglePriceWithDetails>;

export const Default: Story = {
  render: () => <PricingSinglePriceWithDetails />,
};
