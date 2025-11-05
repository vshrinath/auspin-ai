import type { Meta, StoryObj } from "@storybook/react";
import { CtaTwoColumnWithPhoto } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaTwoColumnWithPhoto> = {
  title: "Feature/CtaTwoColumnWithPhoto",
  component: CtaTwoColumnWithPhoto,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaTwoColumnWithPhoto>;

export const Default: Story = {
  render: () => <CtaTwoColumnWithPhoto />,
};
