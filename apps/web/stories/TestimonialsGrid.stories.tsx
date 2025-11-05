import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsGrid } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsGrid> = {
  title: "Feature/TestimonialsGrid",
  component: TestimonialsGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsGrid>;

export const Default: Story = {
  render: () => <TestimonialsGrid />,
};
