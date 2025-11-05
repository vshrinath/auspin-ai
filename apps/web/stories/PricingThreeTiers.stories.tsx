import type { Meta, StoryObj } from "@storybook/react";
import { PricingThreeTiers } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingThreeTiers> = {
  title: "Feature/PricingThreeTiers",
  component: PricingThreeTiers,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingThreeTiers>;

export const Default: Story = {
  render: () => <PricingThreeTiers />,
};
