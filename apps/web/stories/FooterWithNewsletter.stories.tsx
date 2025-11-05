import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithNewsletter } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FooterWithNewsletter> = {
  title: "Feature/FooterWithNewsletter",
  component: FooterWithNewsletter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FooterWithNewsletter>;

export const Default: Story = {
  render: () => <FooterWithNewsletter />,
};
