import type { Meta, StoryObj } from "@storybook/react";
import { FooterFourColumn } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FooterFourColumn> = {
  title: "Feature/FooterFourColumn",
  component: FooterFourColumn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FooterFourColumn>;

export const Default: Story = {
  render: () => <FooterFourColumn />,
};
