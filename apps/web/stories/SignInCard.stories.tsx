import type { Meta, StoryObj } from "@storybook/react";
import { SignInCard } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SignInCard> = {
  title: "Navbar/SignInCard",
  component: SignInCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignInCard>;

export const Default: Story = {
  render: () => <SignInCard />,
};
