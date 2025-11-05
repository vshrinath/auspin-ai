import type { Meta, StoryObj } from "@storybook/react";
import { CtaSimpleStacked } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaSimpleStacked> = {
  title: "Feature/CtaSimpleStacked",
  component: CtaSimpleStacked,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaSimpleStacked>;

export const Default: Story = {
  render: () => <CtaSimpleStacked />,
};
