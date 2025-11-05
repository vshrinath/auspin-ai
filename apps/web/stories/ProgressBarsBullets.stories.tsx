import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBarsBullets } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof ProgressBarsBullets> = {
  title: "Navbar/ProgressBarsBullets",
  component: ProgressBarsBullets,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBarsBullets>;

export const Default: Story = {
  render: () => <ProgressBarsBullets />,
};
