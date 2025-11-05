import type { Meta, StoryObj } from "@storybook/react";
import { BannerPrivacyFullWidth } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerPrivacyFullWidth> = {
  title: "Navbar/BannerPrivacyFullWidth",
  component: BannerPrivacyFullWidth,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerPrivacyFullWidth>;

export const Default: Story = {
  render: () => <BannerPrivacyFullWidth />,
};
