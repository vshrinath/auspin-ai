import type { Meta, StoryObj } from "@storybook/react";
import { TablesWithCheckboxes } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesWithCheckboxes> = {
  title: "Navbar/TablesWithCheckboxes",
  component: TablesWithCheckboxes,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesWithCheckboxes>;

export const Default: Story = {
  render: () => <TablesWithCheckboxes />,
};
