import type { Meta, StoryObj } from "@storybook/react";
import { PricingThreeTiersWithToggle } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingThreeTiersWithToggle> = {
  title: "Feature/PricingThreeTiersWithToggle",
  component: PricingThreeTiersWithToggle,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingThreeTiersWithToggle>;

export const Default: Story = {
  render: () => <PricingThreeTiersWithToggle />,
};
