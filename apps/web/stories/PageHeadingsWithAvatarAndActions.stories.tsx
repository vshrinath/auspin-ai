import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsWithAvatarAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsWithAvatarAndActions> = {
  title: "Navbar/PageHeadingsWithAvatarAndActions",
  component: PageHeadingsWithAvatarAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsWithAvatarAndActions>;

export const Default: Story = {
  render: () => <PageHeadingsWithAvatarAndActions />,
};
