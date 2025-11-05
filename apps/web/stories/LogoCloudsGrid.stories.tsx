import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloudsGrid } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof LogoCloudsGrid> = {
  title: "Feature/LogoCloudsGrid",
  component: LogoCloudsGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoCloudsGrid>;

export const Default: Story = {
  render: () => <LogoCloudsGrid />,
};
