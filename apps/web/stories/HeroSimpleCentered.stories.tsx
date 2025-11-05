import type { Meta, StoryObj } from "@storybook/react";
import { HeroSimpleCentered } from "@salient/ui/components/patterns/hero";

const meta: Meta<typeof HeroSimpleCentered> = {
  title: "Hero/HeroSimpleCentered",
  component: HeroSimpleCentered,
};

export default meta;

type Story = StoryObj<typeof HeroSimpleCentered>;

export const Default: Story = {
  render: () => <HeroSimpleCentered />,
};
