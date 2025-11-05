import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSingleWithAvatar } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TestimonialsSingleWithAvatar> = {
  title: "Feature/TestimonialsSingleWithAvatar",
  component: TestimonialsSingleWithAvatar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TestimonialsSingleWithAvatar>;

export const Default: Story = {
  render: () => <TestimonialsSingleWithAvatar />,
};
