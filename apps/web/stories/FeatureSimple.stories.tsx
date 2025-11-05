import type { Meta, StoryObj } from "@storybook/react";
import { FeatureSimple } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FeatureSimple> = {
  title: "Feature/FeatureSimple",
  component: FeatureSimple,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureSimple>;

export const Default: Story = {
  render: () => <FeatureSimple />,
};
