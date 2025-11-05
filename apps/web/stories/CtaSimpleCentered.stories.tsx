import type { Meta, StoryObj } from "@storybook/react";
import { CtaSimpleCentered } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaSimpleCentered> = {
  title: "Feature/CtaSimpleCentered",
  component: CtaSimpleCentered,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaSimpleCentered>;

export const Default: Story = {
  render: () => <CtaSimpleCentered />,
};
