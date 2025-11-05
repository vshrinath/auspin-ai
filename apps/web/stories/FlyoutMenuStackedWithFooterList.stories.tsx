import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuStackedWithFooterList } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FlyoutMenuStackedWithFooterList> = {
  title: "Navbar/FlyoutMenuStackedWithFooterList",
  component: FlyoutMenuStackedWithFooterList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FlyoutMenuStackedWithFooterList>;

export const Default: Story = {
  render: () => <FlyoutMenuStackedWithFooterList />,
};
