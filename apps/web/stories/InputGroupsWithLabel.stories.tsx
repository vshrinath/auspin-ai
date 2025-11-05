import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsWithLabel } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsWithLabel> = {
  title: "Navbar/InputGroupsWithLabel",
  component: InputGroupsWithLabel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsWithLabel>;

export const Default: Story = {
  render: () => <InputGroupsWithLabel />,
};
