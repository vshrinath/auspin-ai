import type { Meta, StoryObj } from "@storybook/react";
import { BlogThreeColumnBackgroundImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogThreeColumnBackgroundImages> = {
  title: "Feature/BlogThreeColumnBackgroundImages",
  component: BlogThreeColumnBackgroundImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogThreeColumnBackgroundImages>;

export const Default: Story = {
  render: () => <BlogThreeColumnBackgroundImages />,
};
