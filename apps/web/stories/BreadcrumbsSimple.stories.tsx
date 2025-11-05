import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbsSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof BreadcrumbsSimple> = {
  title: "Navbar/BreadcrumbsSimple",
  component: BreadcrumbsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BreadcrumbsSimple>;

export const Default: Story = {
  render: () => <BreadcrumbsSimple />,
};
