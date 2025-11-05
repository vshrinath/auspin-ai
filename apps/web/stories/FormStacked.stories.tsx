import type { Meta, StoryObj } from "@storybook/react";
import { FormStacked } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FormStacked> = {
  title: "Navbar/FormStacked",
  component: FormStacked,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormStacked>;

export const Default: Story = {
  render: () => <FormStacked />,
};
