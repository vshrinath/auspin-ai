import type { Meta, StoryObj } from "@storybook/react";
import { CalendarsSideBySide } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof CalendarsSideBySide> = {
  title: "Navbar/CalendarsSideBySide",
  component: CalendarsSideBySide,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarsSideBySide>;

export const Default: Story = {
  render: () => <CalendarsSideBySide />,
};
