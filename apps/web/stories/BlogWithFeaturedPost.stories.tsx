import type { Meta, StoryObj } from "@storybook/react";
import { BlogWithFeaturedPost } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogWithFeaturedPost> = {
  title: "Feature/BlogWithFeaturedPost",
  component: BlogWithFeaturedPost,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogWithFeaturedPost>;

export const Default: Story = {
  render: () => <BlogWithFeaturedPost />,
};
