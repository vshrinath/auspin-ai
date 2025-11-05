import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloudsWithTestimonial } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof LogoCloudsWithTestimonial> = {
  title: "Feature/LogoCloudsWithTestimonial",
  component: LogoCloudsWithTestimonial,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoCloudsWithTestimonial>;

export const Default: Story = {
  render: () => <LogoCloudsWithTestimonial />,
};
