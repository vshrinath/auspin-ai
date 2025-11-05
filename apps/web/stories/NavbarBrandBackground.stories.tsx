import type { Meta, StoryObj } from "@storybook/react";
import { NavbarBrandBackground } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NavbarBrandBackground> = {
  title: "Navbar/NavbarBrandBackground",
  component: NavbarBrandBackground,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarBrandBackground>;

export const Default: Story = {
  render: () => <NavbarBrandBackground />,
};
