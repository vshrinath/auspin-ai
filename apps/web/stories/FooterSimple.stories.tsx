import type { Meta, StoryObj } from "@storybook/react";
import { FooterSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FooterSimple> = {
  title: "Feature/FooterSimple",
  component: FooterSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FooterSimple>;

export const Default: Story = {
  render: () => <FooterSimple />,
};
