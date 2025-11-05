import type { Meta, StoryObj } from "@storybook/react";
import { TablesSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesSimple> = {
  title: "Navbar/TablesSimple",
  component: TablesSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesSimple>;

export const Default: Story = {
  render: () => <TablesSimple />,
};
