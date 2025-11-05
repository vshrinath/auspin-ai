import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsWeekView } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsWeekView> = {
  title: "Navbar/CalendarsWeekView",
  component: CalendarsWeekView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsWeekView>;

export const Default: Story = {
  render: () => <CalendarsWeekView />,
};
