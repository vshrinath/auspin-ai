import type { Meta, StoryObj } from "@storybook/react";
import { TablesWithVerticalLines } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesWithVerticalLines> = {
  title: "Navbar/TablesWithVerticalLines",
  component: TablesWithVerticalLines,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesWithVerticalLines>;

export const Default: Story = {
  render: () => <TablesWithVerticalLines />,
};
