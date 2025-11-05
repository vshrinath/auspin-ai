import type { Meta, StoryObj } from "@storybook/react";
import { BlogThreeColumnWithImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogThreeColumnWithImages> = {
  title: "Feature/BlogThreeColumnWithImages",
  component: BlogThreeColumnWithImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogThreeColumnWithImages>;

export const Default: Story = {
  render: () => <BlogThreeColumnWithImages />,
};
