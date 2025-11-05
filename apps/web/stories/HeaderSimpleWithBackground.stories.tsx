import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSimpleWithBackground } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof HeaderSimpleWithBackground> = {
  title: "Feature/HeaderSimpleWithBackground",
  component: HeaderSimpleWithBackground,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderSimpleWithBackground>;

export const Default: Story = {
  render: () => <HeaderSimpleWithBackground />,
};
