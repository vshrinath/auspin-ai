import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsSmallWithMeetings } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsSmallWithMeetings> = {
  title: "Navbar/CalendarsSmallWithMeetings",
  component: CalendarsSmallWithMeetings,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsSmallWithMeetings>;

export const Default: Story = {
  render: () => <CalendarsSmallWithMeetings />,
};
