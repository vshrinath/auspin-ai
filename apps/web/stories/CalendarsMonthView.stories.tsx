import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsMonthView } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsMonthView> = {
  title: "Navbar/CalendarsMonthView",
  component: CalendarsMonthView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsMonthView>;

export const Default: Story = {
  render: () => <CalendarsMonthView />,
};
