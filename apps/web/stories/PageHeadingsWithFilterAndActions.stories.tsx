import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsWithFilterAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsWithFilterAndActions> = {
  title: "Navbar/PageHeadingsWithFilterAndActions",
  component: PageHeadingsWithFilterAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsWithFilterAndActions>;

export const Default: Story = {
  render: () => <PageHeadingsWithFilterAndActions />,
};
