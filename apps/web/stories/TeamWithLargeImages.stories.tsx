import type { Meta, StoryObj } from "@storybook/react";
import { TeamWithLargeImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamWithLargeImages> = {
  title: "Feature/TeamWithLargeImages",
  component: TeamWithLargeImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamWithLargeImages>;

export const Default: Story = {
  render: () => <TeamWithLargeImages />,
};
