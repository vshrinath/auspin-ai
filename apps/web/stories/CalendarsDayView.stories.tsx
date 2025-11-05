import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsDayView } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsDayView> = {
  title: "Navbar/CalendarsDayView",
  component: CalendarsDayView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsDayView>;

export const Default: Story = {
  render: () => <CalendarsDayView />,
};
