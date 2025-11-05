import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterWithDetails } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof NewsletterWithDetails> = {
  title: "Feature/NewsletterWithDetails",
  component: NewsletterWithDetails,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewsletterWithDetails>;

export const Default: Story = {
  render: () => <NewsletterWithDetails />,
};
