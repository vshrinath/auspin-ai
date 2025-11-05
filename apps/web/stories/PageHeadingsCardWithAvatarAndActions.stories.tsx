import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsCardWithAvatarAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsCardWithAvatarAndActions> = {
  title: "Navbar/PageHeadingsCardWithAvatarAndActions",
  component: PageHeadingsCardWithAvatarAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsCardWithAvatarAndActions>;

export const Default: Story = {
  render: () => <PageHeadingsCardWithAvatarAndActions />,
};
