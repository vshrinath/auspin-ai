import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxesListWithHeading } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CheckboxesListWithHeading> = {
  title: "Navbar/CheckboxesListWithHeading",
  component: CheckboxesListWithHeading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckboxesListWithHeading>;

export const Default: Story = {
  render: () => <CheckboxesListWithHeading />,
};
