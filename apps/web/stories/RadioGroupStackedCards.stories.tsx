import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupStackedCards } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof RadioGroupStackedCards> = {
  title: "Navbar/RadioGroupStackedCards",
  component: RadioGroupStackedCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroupStackedCards>;

export const Default: Story = {
  render: () => <RadioGroupStackedCards />,
};
