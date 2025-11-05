import type { Meta, StoryObj } from "@storybook/react";
import { TeamGridWithRoundImages } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamGridWithRoundImages> = {
  title: "Feature/TeamGridWithRoundImages",
  component: TeamGridWithRoundImages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamGridWithRoundImages>;

export const Default: Story = {
  render: () => <TeamGridWithRoundImages />,
};
