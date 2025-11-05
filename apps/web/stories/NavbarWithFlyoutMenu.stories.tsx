import type { Meta, StoryObj } from "@storybook/react";
import { NavbarWithFlyoutMenu } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NavbarWithFlyoutMenu> = {
  title: "Navbar/NavbarWithFlyoutMenu",
  component: NavbarWithFlyoutMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarWithFlyoutMenu>;

export const Default: Story = {
  render: () => <NavbarWithFlyoutMenu />,
};
