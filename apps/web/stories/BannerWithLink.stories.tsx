import type { Meta, StoryObj } from "@storybook/react";
import { BannerWithLink } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerWithLink> = {
  title: "Navbar/BannerWithLink",
  component: BannerWithLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerWithLink>;

export const Default: Story = {
  render: () => <BannerWithLink />,
};
