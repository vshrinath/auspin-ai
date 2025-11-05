import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Medium: Story = {
  args: {
    children: <div className="bg-gray-100 p-4 rounded">Medium Container</div>,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <div className="bg-gray-100 p-4 rounded">Large Container</div>,
  },
};
