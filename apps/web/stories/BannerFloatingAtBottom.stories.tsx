import type { Meta, StoryObj } from "@storybook/react";
import { BannerFloatingAtBottom } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerFloatingAtBottom> = {
  title: "Navbar/BannerFloatingAtBottom",
  component: BannerFloatingAtBottom,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerFloatingAtBottom>;

export const Default: Story = {
  render: () => <BannerFloatingAtBottom />,
};
