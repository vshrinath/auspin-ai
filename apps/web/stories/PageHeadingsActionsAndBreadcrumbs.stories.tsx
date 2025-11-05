import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsActionsAndBreadcrumbs } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsActionsAndBreadcrumbs> = {
  title: "Navbar/PageHeadingsActionsAndBreadcrumbs",
  component: PageHeadingsActionsAndBreadcrumbs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsActionsAndBreadcrumbs>;

export const Default: Story = {
  render: () => <PageHeadingsActionsAndBreadcrumbs />,
};
