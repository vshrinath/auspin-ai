import type { Meta, StoryObj } from "@storybook/react";
import { TabsWithBadges } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TabsWithBadges> = {
  title: "Navbar/TabsWithBadges",
  component: TabsWithBadges,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TabsWithBadges>;

export const Default: Story = {
  render: () => <TabsWithBadges />,
};
