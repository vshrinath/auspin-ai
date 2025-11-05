import type { Meta, StoryObj } from "@storybook/react";
import { FeatureWithLargeScreenshot } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FeatureWithLargeScreenshot> = {
  title: "Feature/FeatureWithLargeScreenshot",
  component: FeatureWithLargeScreenshot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureWithLargeScreenshot>;

export const Default: Story = {
  render: () => <FeatureWithLargeScreenshot />,
};
