import type { Meta, StoryObj } from "@storybook/react";
import { TablesStripedRows } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesStripedRows> = {
  title: "Navbar/TablesStripedRows",
  component: TablesStripedRows,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesStripedRows>;

export const Default: Story = {
  render: () => <TablesStripedRows />,
};
