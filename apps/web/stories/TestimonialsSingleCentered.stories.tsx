import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSingleCentered } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsSingleCentered> = {
  title: "Feature/TestimonialsSingleCentered",
  component: TestimonialsSingleCentered,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsSingleCentered>;

export const Default: Story = {
  render: () => <TestimonialsSingleCentered />,
};
