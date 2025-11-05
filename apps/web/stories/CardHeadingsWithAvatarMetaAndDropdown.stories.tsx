import type { Meta, StoryObj } from "@storybook/react";
import { CardHeadingsWithAvatarMetaAndDropdown } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CardHeadingsWithAvatarMetaAndDropdown> = {
  title: "Navbar/CardHeadingsWithAvatarMetaAndDropdown",
  component: CardHeadingsWithAvatarMetaAndDropdown,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardHeadingsWithAvatarMetaAndDropdown>;

export const Default: Story = {
  render: () => <CardHeadingsWithAvatarMetaAndDropdown />,
};
