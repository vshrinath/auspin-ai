import type { Meta, StoryObj } from "@storybook/react";
import { CtaWithImageTiles } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaWithImageTiles> = {
  title: "Feature/CtaWithImageTiles",
  component: CtaWithImageTiles,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaWithImageTiles>;

export const Default: Story = {
  render: () => <CtaWithImageTiles />,
};
