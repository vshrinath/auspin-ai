import type { Meta, StoryObj } from "@storybook/react";
import { BannerWithButton } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerWithButton> = {
  title: "Navbar/BannerWithButton",
  component: BannerWithButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerWithButton>;

export const Default: Story = {
  render: () => <BannerWithButton />,
};
