import type { Meta, StoryObj } from "@storybook/react";
import { SignInSplitScreen } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SignInSplitScreen> = {
  title: "Navbar/SignInSplitScreen",
  component: SignInSplitScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignInSplitScreen>;

export const Default: Story = {
  render: () => <SignInSplitScreen />,
};
