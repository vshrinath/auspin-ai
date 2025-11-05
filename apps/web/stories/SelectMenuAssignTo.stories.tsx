import type { Meta, StoryObj } from "@storybook/react";
import { SelectMenuAssignTo } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SelectMenuAssignTo> = {
  title: "Navbar/SelectMenuAssignTo",
  component: SelectMenuAssignTo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectMenuAssignTo>;

export const Default: Story = {
  render: () => <SelectMenuAssignTo />,
};
