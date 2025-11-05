import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsCreditCardInput } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsCreditCardInput> = {
  title: "Navbar/InputGroupsCreditCardInput",
  component: InputGroupsCreditCardInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsCreditCardInput>;

export const Default: Story = {
  render: () => <InputGroupsCreditCardInput />,
};
