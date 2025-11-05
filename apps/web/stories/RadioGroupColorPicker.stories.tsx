import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupColorPicker } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof RadioGroupColorPicker> = {
  title: "Navbar/RadioGroupColorPicker",
  component: RadioGroupColorPicker,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroupColorPicker>;

export const Default: Story = {
  render: () => <RadioGroupColorPicker />,
};
