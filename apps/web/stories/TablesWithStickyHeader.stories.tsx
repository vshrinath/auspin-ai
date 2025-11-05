import type { Meta, StoryObj } from "@storybook/react";
import { TablesWithStickyHeader } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesWithStickyHeader> = {
  title: "Navbar/TablesWithStickyHeader",
  component: TablesWithStickyHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesWithStickyHeader>;

export const Default: Story = {
  render: () => <TablesWithStickyHeader />,
};
