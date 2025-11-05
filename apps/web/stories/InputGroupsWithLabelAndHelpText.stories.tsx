import type { Meta, StoryObj } from "@storybook/react";
import { InputGroupsWithLabelAndHelpText } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof InputGroupsWithLabelAndHelpText> = {
  title: "Navbar/InputGroupsWithLabelAndHelpText",
  component: InputGroupsWithLabelAndHelpText,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroupsWithLabelAndHelpText>;

export const Default: Story = {
  render: () => <InputGroupsWithLabelAndHelpText />,
};
