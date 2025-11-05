import type { Meta, StoryObj } from "@storybook/react";
import { BannerPrivacyNotice } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BannerPrivacyNotice> = {
  title: "Navbar/BannerPrivacyNotice",
  component: BannerPrivacyNotice,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BannerPrivacyNotice>;

export const Default: Story = {
  render: () => <BannerPrivacyNotice />,
};
