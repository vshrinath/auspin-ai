import type { Meta, StoryObj } from "@storybook/react";
import { TabsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TabsSimple> = {
  title: "Navbar/TabsSimple",
  component: TabsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TabsSimple>;

export const Default: Story = {
  render: () => <TabsSimple />,
};
