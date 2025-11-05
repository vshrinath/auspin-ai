import type { Meta, StoryObj } from "@storybook/react";
import { FeedsSimpleWithIcons } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FeedsSimpleWithIcons> = {
  title: "Navbar/FeedsSimpleWithIcons",
  component: FeedsSimpleWithIcons,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeedsSimpleWithIcons>;

export const Default: Story = {
  render: () => <FeedsSimpleWithIcons />,
};
