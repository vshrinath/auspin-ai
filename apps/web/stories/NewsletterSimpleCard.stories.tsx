import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSimpleCard } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof NewsletterSimpleCard> = {
  title: "Feature/NewsletterSimpleCard",
  component: NewsletterSimpleCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewsletterSimpleCard>;

export const Default: Story = {
  render: () => <NewsletterSimpleCard />,
};
