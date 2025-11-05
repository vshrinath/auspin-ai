import type { Meta, StoryObj } from "@storybook/react";
import { FeatureThreeColumnWithIcons } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof FeatureThreeColumnWithIcons> = {
  title: "Feature/FeatureThreeColumnWithIcons",
  component: FeatureThreeColumnWithIcons,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureThreeColumnWithIcons>;

export const Default: Story = {
  render: () => <FeatureThreeColumnWithIcons />,
};
