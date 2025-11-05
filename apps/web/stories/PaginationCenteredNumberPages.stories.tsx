import type { Meta, StoryObj } from "@storybook/react";
import { PaginationCenteredNumberPages } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof PaginationCenteredNumberPages> = {
  title: "Navbar/PaginationCenteredNumberPages",
  component: PaginationCenteredNumberPages,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PaginationCenteredNumberPages>;

export const Default: Story = {
  render: () => <PaginationCenteredNumberPages />,
};
