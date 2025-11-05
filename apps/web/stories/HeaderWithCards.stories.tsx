import type { Meta, StoryObj } from "@storybook/react";
import { HeaderWithCards } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof HeaderWithCards> = {
  title: "Feature/HeaderWithCards",
  component: HeaderWithCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderWithCards>;

export const Default: Story = {
  render: () => <HeaderWithCards />,
};
