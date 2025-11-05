import type { Meta, StoryObj } from "@storybook/react";
import { TablesStackedMobileColumns } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TablesStackedMobileColumns> = {
  title: "Navbar/TablesStackedMobileColumns",
  component: TablesStackedMobileColumns,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TablesStackedMobileColumns>;

export const Default: Story = {
  render: () => <TablesStackedMobileColumns />,
};
