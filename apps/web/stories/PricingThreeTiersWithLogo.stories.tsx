import type { Meta, StoryObj } from "@storybook/react";
import { PricingThreeTiersWithLogo } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingThreeTiersWithLogo> = {
  title: "Feature/PricingThreeTiersWithLogo",
  component: PricingThreeTiersWithLogo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingThreeTiersWithLogo>;

export const Default: Story = {
  render: () => <PricingThreeTiersWithLogo />,
};
