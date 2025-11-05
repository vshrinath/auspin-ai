import type { Meta, StoryObj } from "@storybook/react";
import { TeamFullWidthVerticalImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamFullWidthVerticalImages> = {
  title: "Feature/TeamFullWidthVerticalImages",
  component: TeamFullWidthVerticalImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamFullWidthVerticalImages>;

export const Default: Story = {
  render: () => <TeamFullWidthVerticalImages />,
};
