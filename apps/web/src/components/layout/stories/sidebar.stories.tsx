import type { Meta, StoryObj } from "@storybook/react";

const Sidebar = () => (
  <div className="w-64 h-96 bg-gray-100 border-r p-4">Sidebar Example</div>
);

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
