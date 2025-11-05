import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxesList } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CheckboxesList> = {
  title: "Navbar/CheckboxesList",
  component: CheckboxesList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckboxesList>;

export const Default: Story = {
  render: () => <CheckboxesList />,
};
