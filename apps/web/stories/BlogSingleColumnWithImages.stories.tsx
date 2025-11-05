import type { Meta, StoryObj } from "@storybook/react";
import { BlogSingleColumnWithImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogSingleColumnWithImages> = {
  title: "Feature/BlogSingleColumnWithImages",
  component: BlogSingleColumnWithImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogSingleColumnWithImages>;

export const Default: Story = {
  render: () => <BlogSingleColumnWithImages />,
};
