import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsMetaAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsMetaAndActions> = {
  title: "Navbar/PageHeadingsMetaAndActions",
  component: PageHeadingsMetaAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsMetaAndActions>;

export const Default: Story = {
  render: () => <PageHeadingsMetaAndActions />,
};
