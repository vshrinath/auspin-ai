import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloudsSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof LogoCloudsSimple> = {
  title: "Feature/LogoCloudsSimple",
  component: LogoCloudsSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoCloudsSimple>;

export const Default: Story = {
  render: () => <LogoCloudsSimple />,
};
