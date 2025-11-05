import type { Meta, StoryObj } from "@storybook/react";
import { TeamWithSmallImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamWithSmallImages> = {
  title: "Feature/TeamWithSmallImages",
  component: TeamWithSmallImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamWithSmallImages>;

export const Default: Story = {
  render: () => <TeamWithSmallImages />,
};
