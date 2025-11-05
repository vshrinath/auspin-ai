import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsPhoneInput } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsPhoneInput> = {
  title: "Navbar/InputGroupsPhoneInput",
  component: InputGroupsPhoneInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsPhoneInput>;

export const Default: Story = {
  render: () => <InputGroupsPhoneInput />,
};
