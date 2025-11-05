import type { Meta, StoryObj } from "@storybook/react";
import { BannerBottomAligned } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerBottomAligned> = {
  title: "Navbar/BannerBottomAligned",
  component: BannerBottomAligned,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerBottomAligned>;

export const Default: Story = {
  render: () => <BannerBottomAligned />,
};
