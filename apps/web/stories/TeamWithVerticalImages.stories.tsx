import type { Meta, StoryObj } from "@storybook/react";
import { TeamWithVerticalImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamWithVerticalImages> = {
  title: "Feature/TeamWithVerticalImages",
  component: TeamWithVerticalImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamWithVerticalImages>;

export const Default: Story = {
  render: () => <TeamWithVerticalImages />,
};
