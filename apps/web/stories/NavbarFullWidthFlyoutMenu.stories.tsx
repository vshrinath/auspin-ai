import type { Meta, StoryObj } from "@storybook/react";
import { NavbarFullWidthFlyoutMenu } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NavbarFullWidthFlyoutMenu> = {
  title: "Navbar/NavbarFullWidthFlyoutMenu",
  component: NavbarFullWidthFlyoutMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarFullWidthFlyoutMenu>;

export const Default: Story = {
  render: () => <NavbarFullWidthFlyoutMenu />,
};
