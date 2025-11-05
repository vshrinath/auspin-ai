import type { Meta, StoryObj } from "@storybook/react";
import { FaqsWithAccordian } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FaqsWithAccordian> = {
  title: "Feature/FaqsWithAccordian",
  component: FaqsWithAccordian,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FaqsWithAccordian>;

export const Default: Story = {
  render: () => <FaqsWithAccordian />,
};
