import type { Meta, StoryObj } from "@storybook/react";
import { SearchWithPreview } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SearchWithPreview> = {
  title: "Navbar/SearchWithPreview",
  component: SearchWithPreview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchWithPreview>;

export const Default: Story = {
  render: () => <SearchWithPreview />,
};
