import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsWithBackgroundImage } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsWithBackgroundImage> = {
  title: "Feature/TestimonialsWithBackgroundImage",
  component: TestimonialsWithBackgroundImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsWithBackgroundImage>;

export const Default: Story = {
  render: () => <TestimonialsWithBackgroundImage />,
};
