import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof NewsletterSimple> = {
  title: "Feature/NewsletterSimple",
  component: NewsletterSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewsletterSimple>;

export const Default: Story = {
  render: () => <NewsletterSimple />,
};
