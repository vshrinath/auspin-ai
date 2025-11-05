import type { Meta, StoryObj } from "@storybook/react";
import { CtaSplitWithImage } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof CtaSplitWithImage> = {
  title: "Feature/CtaSplitWithImage",
  component: CtaSplitWithImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaSplitWithImage>;

export const Default: Story = {
  render: () => <CtaSplitWithImage />,
};
