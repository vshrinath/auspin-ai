import type { Meta, StoryObj } from "@storybook/react";
import { TextBlockWithHeader } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof TextBlockWithHeader> = {
  title: "Navbar/TextBlockWithHeader",
  component: TextBlockWithHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextBlockWithHeader>;

export const Default: Story = {
  render: () => <TextBlockWithHeader />,
};
