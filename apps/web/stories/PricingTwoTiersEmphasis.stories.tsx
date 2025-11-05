import type { Meta, StoryObj } from "@storybook/react";
import { PricingTwoTiersEmphasis } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof PricingTwoTiersEmphasis> = {
  title: "Feature/PricingTwoTiersEmphasis",
  component: PricingTwoTiersEmphasis,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PricingTwoTiersEmphasis>;

export const Default: Story = {
  render: () => <PricingTwoTiersEmphasis />,
};
