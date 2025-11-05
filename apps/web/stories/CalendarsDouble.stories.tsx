import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsDouble } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsDouble> = {
  title: "Navbar/CalendarsDouble",
  component: CalendarsDouble,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsDouble>;

export const Default: Story = {
  render: () => <CalendarsDouble />,
};
