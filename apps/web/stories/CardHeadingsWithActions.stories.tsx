import type { Meta, StoryObj } from "@storybook/react";
import { CardHeadingsWithActions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CardHeadingsWithActions> = {
  title: "Navbar/CardHeadingsWithActions",
  component: CardHeadingsWithActions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardHeadingsWithActions>;

export const Default: Story = {
  render: () => <CardHeadingsWithActions />,
};
