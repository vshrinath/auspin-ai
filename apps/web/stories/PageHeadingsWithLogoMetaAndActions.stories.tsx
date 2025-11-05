import type { Meta, StoryObj } from "@storybook/react";
import { PageHeadingsWithLogoMetaAndActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PageHeadingsWithLogoMetaAndActions> = {
  title: "Navbar/PageHeadingsWithLogoMetaAndActions",
  component: PageHeadingsWithLogoMetaAndActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeadingsWithLogoMetaAndActions>;

export const Default: Story = {
  render: () => <PageHeadingsWithLogoMetaAndActions />,
};
