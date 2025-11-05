import type { Meta, StoryObj } from "@storybook/react";
import { DividersWithLabel } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof DividersWithLabel> = {
  title: "Navbar/DividersWithLabel",
  component: DividersWithLabel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DividersWithLabel>;

export const Default: Story = {
  render: () => <DividersWithLabel />,
};
