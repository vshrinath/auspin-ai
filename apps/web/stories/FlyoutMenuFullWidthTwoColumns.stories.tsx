import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuFullWidthTwoColumns } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FlyoutMenuFullWidthTwoColumns> = {
  title: "Navbar/FlyoutMenuFullWidthTwoColumns",
  component: FlyoutMenuFullWidthTwoColumns,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FlyoutMenuFullWidthTwoColumns>;

export const Default: Story = {
  render: () => <FlyoutMenuFullWidthTwoColumns />,
};
