import type { Meta, StoryObj } from "@storybook/react";
import { CardHeadingsWithAvatarAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CardHeadingsWithAvatarAndActions> = {
  title: "Navbar/CardHeadingsWithAvatarAndActions",
  component: CardHeadingsWithAvatarAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardHeadingsWithAvatarAndActions>;

export const Default: Story = {
  render: () => <CardHeadingsWithAvatarAndActions />,
};
