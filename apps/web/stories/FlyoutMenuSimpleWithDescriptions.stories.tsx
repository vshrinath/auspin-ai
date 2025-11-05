import type { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenuSimpleWithDescriptions } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FlyoutMenuSimpleWithDescriptions> = {
  title: "Navbar/FlyoutMenuSimpleWithDescriptions",
  component: FlyoutMenuSimpleWithDescriptions,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FlyoutMenuSimpleWithDescriptions>;

export const Default: Story = {
  render: () => <FlyoutMenuSimpleWithDescriptions />,
};
