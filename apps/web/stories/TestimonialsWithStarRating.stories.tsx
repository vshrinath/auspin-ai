import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsWithStarRating } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsWithStarRating> = {
  title: "Feature/TestimonialsWithStarRating",
  component: TestimonialsWithStarRating,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsWithStarRating>;

export const Default: Story = {
  render: () => <TestimonialsWithStarRating />,
};
