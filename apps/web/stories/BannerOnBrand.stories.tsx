import type { Meta, StoryObj } from "@storybook/react";
import { BannerOnBrand } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerOnBrand> = {
  title: "Navbar/BannerOnBrand",
  component: BannerOnBrand,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerOnBrand>;

export const Default: Story = {
  render: () => <BannerOnBrand />,
};
