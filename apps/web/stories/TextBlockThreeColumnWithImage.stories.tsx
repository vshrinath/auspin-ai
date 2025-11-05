import type { Meta, StoryObj } from "@storybook/react";
import { TextBlockThreeColumnWithImage } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TextBlockThreeColumnWithImage> = {
  title: "Navbar/TextBlockThreeColumnWithImage",
  component: TextBlockThreeColumnWithImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextBlockThreeColumnWithImage>;

export const Default: Story = {
  render: () => <TextBlockThreeColumnWithImage />,
};
