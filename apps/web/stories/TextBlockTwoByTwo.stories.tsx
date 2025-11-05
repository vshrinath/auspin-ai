import type { Meta, StoryObj } from "@storybook/react";
import { TextBlockTwoByTwo } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TextBlockTwoByTwo> = {
  title: "Navbar/TextBlockTwoByTwo",
  component: TextBlockTwoByTwo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextBlockTwoByTwo>;

export const Default: Story = {
  render: () => <TextBlockTwoByTwo />,
};
