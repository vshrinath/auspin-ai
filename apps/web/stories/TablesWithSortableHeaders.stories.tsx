import type { Meta, StoryObj } from "@storybook/react";
import { TablesWithSortableHeaders } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesWithSortableHeaders> = {
  title: "Navbar/TablesWithSortableHeaders",
  component: TablesWithSortableHeaders,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesWithSortableHeaders>;

export const Default: Story = {
  render: () => <TablesWithSortableHeaders />,
};
