import type { Meta, StoryObj } from "@storybook/react";
import { FeatureWithProductScreenshot } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FeatureWithProductScreenshot> = {
  title: "Feature/FeatureWithProductScreenshot",
  component: FeatureWithProductScreenshot,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureWithProductScreenshot>;

export const Default: Story = {
  render: () => <FeatureWithProductScreenshot />,
};
