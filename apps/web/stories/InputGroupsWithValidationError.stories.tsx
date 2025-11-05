import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsWithValidationError } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsWithValidationError> = {
  title: "Navbar/InputGroupsWithValidationError",
  component: InputGroupsWithValidationError,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsWithValidationError>;

export const Default: Story = {
  render: () => <InputGroupsWithValidationError />,
};
