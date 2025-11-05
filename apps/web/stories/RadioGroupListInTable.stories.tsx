import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupListInTable } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof RadioGroupListInTable> = {
  title: "Navbar/RadioGroupListInTable",
  component: RadioGroupListInTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroupListInTable>;

export const Default: Story = {
  render: () => <RadioGroupListInTable />,
};
