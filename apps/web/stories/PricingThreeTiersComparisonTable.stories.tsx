import type { Meta, StoryObj } from "@storybook/react";
import { PricingThreeTiersComparisonTable } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingThreeTiersComparisonTable> = {
  title: "Feature/PricingThreeTiersComparisonTable",
  component: PricingThreeTiersComparisonTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingThreeTiersComparisonTable>;

export const Default: Story = {
  render: () => <PricingThreeTiersComparisonTable />,
};
