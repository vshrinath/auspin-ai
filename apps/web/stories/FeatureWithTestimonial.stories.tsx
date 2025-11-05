import type { Meta, StoryObj } from "@storybook/react";
import { FeatureWithTestimonial } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FeatureWithTestimonial> = {
  title: "Feature/FeatureWithTestimonial",
  component: FeatureWithTestimonial,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureWithTestimonial>;

export const Default: Story = {
  render: () => <FeatureWithTestimonial />,
};
