import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsDisabledState } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsDisabledState> = {
  title: "Navbar/InputGroupsDisabledState",
  component: InputGroupsDisabledState,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsDisabledState>;

export const Default: Story = {
  render: () => <InputGroupsDisabledState />,
};
