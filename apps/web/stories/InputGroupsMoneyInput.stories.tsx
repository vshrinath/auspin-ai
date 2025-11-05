import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsMoneyInput } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsMoneyInput> = {
  title: "Navbar/InputGroupsMoneyInput",
  component: InputGroupsMoneyInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsMoneyInput>;

export const Default: Story = {
  render: () => <InputGroupsMoneyInput />,
};
