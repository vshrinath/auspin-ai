import type { Meta, StoryObj } from "@storybook/react";
import { TeamLargeGridWithCards } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof TeamLargeGridWithCards> = {
  title: "Feature/TeamLargeGridWithCards",
  component: TeamLargeGridWithCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamLargeGridWithCards>;

export const Default: Story = {
  render: () => <TeamLargeGridWithCards />,
};
