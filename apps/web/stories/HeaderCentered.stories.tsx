import type { Meta, StoryObj } from "@storybook/react";
import { HeaderCentered } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof HeaderCentered> = {
  title: "Feature/HeaderCentered",
  component: HeaderCentered,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderCentered>;

export const Default: Story = {
  render: () => <HeaderCentered />,
};
