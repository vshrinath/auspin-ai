import type { Meta, StoryObj } from "@storybook/react";
import { HeaderWithStats } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof HeaderWithStats> = {
  title: "Feature/HeaderWithStats",
  component: HeaderWithStats,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderWithStats>;

export const Default: Story = {
  render: () => <HeaderWithStats />,
};
