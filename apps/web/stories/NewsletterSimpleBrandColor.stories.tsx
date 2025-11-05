import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSimpleBrandColor } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof NewsletterSimpleBrandColor> = {
  title: "Feature/NewsletterSimpleBrandColor",
  component: NewsletterSimpleBrandColor,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewsletterSimpleBrandColor>;

export const Default: Story = {
  render: () => <NewsletterSimpleBrandColor />,
};
