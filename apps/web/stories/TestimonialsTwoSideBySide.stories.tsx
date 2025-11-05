import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsTwoSideBySide } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsTwoSideBySide> = {
  title: "Feature/TestimonialsTwoSideBySide",
  component: TestimonialsTwoSideBySide,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsTwoSideBySide>;

export const Default: Story = {
  render: () => <TestimonialsTwoSideBySide />,
};
