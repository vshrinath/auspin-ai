import type { Meta, StoryObj } from "@storybook/react";
import { NavbarWithCenteredLogo } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof NavbarWithCenteredLogo> = {
  title: "Navbar/NavbarWithCenteredLogo",
  component: NavbarWithCenteredLogo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavbarWithCenteredLogo>;

export const Default: Story = {
  render: () => <NavbarWithCenteredLogo />,
};
