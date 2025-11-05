import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloudsLogoOnRight } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof LogoCloudsLogoOnRight> = {
  title: "Feature/LogoCloudsLogoOnRight",
  component: LogoCloudsLogoOnRight,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoCloudsLogoOnRight>;

export const Default: Story = {
  render: () => <LogoCloudsLogoOnRight />,
};
