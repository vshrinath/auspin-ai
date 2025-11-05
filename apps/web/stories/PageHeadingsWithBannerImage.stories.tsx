import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsWithBannerImage } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsWithBannerImage> = {
  title: "Navbar/PageHeadingsWithBannerImage",
  component: PageHeadingsWithBannerImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsWithBannerImage>;

export const Default: Story = {
  render: () => <PageHeadingsWithBannerImage />,
};
