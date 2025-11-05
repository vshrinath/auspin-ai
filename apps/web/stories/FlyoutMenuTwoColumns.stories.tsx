import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuTwoColumns } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FlyoutMenuTwoColumns> = {
  title: "Navbar/FlyoutMenuTwoColumns",
  component: FlyoutMenuTwoColumns,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FlyoutMenuTwoColumns>;

export const Default: Story = {
  render: () => <FlyoutMenuTwoColumns />,
};
