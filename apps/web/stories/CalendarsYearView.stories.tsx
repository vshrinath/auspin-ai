import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsYearView } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsYearView> = {
  title: "Navbar/CalendarsYearView",
  component: CalendarsYearView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsYearView>;

export const Default: Story = {
  render: () => <CalendarsYearView />,
};
