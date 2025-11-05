import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupCards } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof RadioGroupCards> = {
  title: "Navbar/RadioGroupCards",
  component: RadioGroupCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroupCards>;

export const Default: Story = {
  render: () => <RadioGroupCards />,
};
