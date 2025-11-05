import type { Meta, StoryObj } from "@storybook/react";
import { FaqsSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FaqsSimple> = {
  title: "Feature/FaqsSimple",
  component: FaqsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FaqsSimple>;

export const Default: Story = {
  render: () => <FaqsSimple />,
};
