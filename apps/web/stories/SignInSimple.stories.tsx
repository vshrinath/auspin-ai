import type { Meta, StoryObj } from "@storybook/react";
import { SignInSimple } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SignInSimple> = {
  title: "Navbar/SignInSimple",
  component: SignInSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignInSimple>;

export const Default: Story = {
  render: () => <SignInSimple />,
};
