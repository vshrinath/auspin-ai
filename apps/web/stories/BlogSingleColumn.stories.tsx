import type { Meta, StoryObj } from "@storybook/react";
import { BlogSingleColumn } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof BlogSingleColumn> = {
  title: "Feature/BlogSingleColumn",
  component: BlogSingleColumn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogSingleColumn>;

export const Default: Story = {
  render: () => <BlogSingleColumn />,
};
