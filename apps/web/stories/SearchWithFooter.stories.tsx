import type { Meta, StoryObj } from "@storybook/react";
import { SearchWithFooter } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof SearchWithFooter> = {
  title: "Navbar/SearchWithFooter",
  component: SearchWithFooter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchWithFooter>;

export const Default: Story = {
  render: () => <SearchWithFooter />,
};
