import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof HeaderSimple> = {
  title: "Feature/HeaderSimple",
  component: HeaderSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderSimple>;

export const Default: Story = {
  render: () => <HeaderSimple />,
};
