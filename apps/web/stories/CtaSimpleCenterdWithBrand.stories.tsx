import type { Meta, StoryObj } from "@storybook/react";
import { CtaSimpleCenterdWithBrand } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaSimpleCenterdWithBrand> = {
  title: "Feature/CtaSimpleCenterdWithBrand",
  component: CtaSimpleCenterdWithBrand,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaSimpleCenterdWithBrand>;

export const Default: Story = {
  render: () => <CtaSimpleCenterdWithBrand />,
};
