import type { Meta, StoryObj } from "@storybook/react";
import { BlogThreeColumn } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogThreeColumn> = {
  title: "Feature/BlogThreeColumn",
  component: BlogThreeColumn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogThreeColumn>;

export const Default: Story = {
  render: () => <BlogThreeColumn />,
};
